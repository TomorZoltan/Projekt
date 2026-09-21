-- ============================================================
--  FOGLALÁSI RENDSZER - adatbázis séma
--  Javítva az eredeti ER diagram alapján
-- ============================================================

CREATE DATABASE IF NOT EXISTS foglalasi_rendszer
    CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE foglalasi_rendszer;

-- ------------------------------------------------------------
-- FELHASZNALO
-- A felhasználók (vendégek és szálláshely-feltöltők).
-- Az eredeti táblában volt egy "lefoglaltID" és "feltoltottID"
-- mező is - ezekre nincs szükség: egy felhasználónak több
-- foglalása és több feltöltött szállása is lehet, ezt a
-- kapcsolatot a másik két tábla idegen kulcsai adják meg,
-- nem lehet (és nem is kell) egyetlen ID-ban tárolni.
-- ------------------------------------------------------------
CREATE TABLE Felhasznalo (
    felhasznaloID INT AUTO_INCREMENT PRIMARY KEY,
    nev           VARCHAR(100) NOT NULL,
    email         VARCHAR(150) NOT NULL UNIQUE,
    jelszo        VARCHAR(255) NOT NULL,   -- mindig hash-elve (pl. bcrypt) tárolva!
    letrehozva    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------
-- SZALLAS
-- A szálláshirdetések.
-- Két különálló folyamat kapcsolódik ide:
--   1) FELTÖLTÉS - egy Felhasznalo hozza létre a hirdetést
--      (feltoltoID FK -> Felhasznalo)
--   2) FOGLALÁS - egy (másik) Felhasznalo lefoglalja azt a
--      Foglalas táblán keresztül. A "lefoglalva" mező itt egy
--      státusz-jelző: alapból FALSE, és amint készül hozzá egy
--      Foglalas rekord, TRUE-ra áll (lásd a trigger lent).
--      Így egyszerre csak egy aktív foglalás lehet egy
--      szálláson, ahogy az eredeti terv is elképzelte.
-- ------------------------------------------------------------
CREATE TABLE Szallas (
    szallasID   INT AUTO_INCREMENT PRIMARY KEY,
    nev         VARCHAR(150) NOT NULL,
    ar          DECIMAL(10,2) NOT NULL,       -- éjszakánkénti ár
    hely        VARCHAR(200) NOT NULL,
    kep         VARCHAR(255),                 -- kép elérési útja / URL-je
    maxFo       INT NOT NULL,                 -- max. férőhely
    feltoltoID  INT NOT NULL,                 -- ki töltötte fel a hirdetést
    lefoglalva  BOOLEAN NOT NULL DEFAULT FALSE,  -- foglalt-e jelenleg
    letrehozva  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_szallas_feltolto
        FOREIGN KEY (feltoltoID) REFERENCES Felhasznalo(felhasznaloID)
        ON DELETE CASCADE
);

-- ------------------------------------------------------------
-- FOGLALAS
-- Egy foglalás mindig egy adott szálláshoz ÉS egy adott
-- felhasználóhoz (a foglalást leadó vendéghez) kapcsolódik.
-- Az eredeti diagramon a két kapcsolat vonala keresztezte
-- egymást (Szallas <-> Felhasznalo, illetve Foglalas <-> mindkettő
-- külön-külön) - itt egyértelműen két külön idegen kulcs van.
-- ------------------------------------------------------------
CREATE TABLE Foglalas (
    foglalasID    INT AUTO_INCREMENT PRIMARY KEY,
    szallasID     INT NOT NULL,
    felhasznaloID INT NOT NULL,               -- ki foglalt (a vendég)
    fo            INT NOT NULL,               -- hány fő
    letrehozva    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_foglalas_szallas
        FOREIGN KEY (szallasID) REFERENCES Szallas(szallasID)
        ON DELETE CASCADE,
    CONSTRAINT fk_foglalas_felhasznalo
        FOREIGN KEY (felhasznaloID) REFERENCES Felhasznalo(felhasznaloID)
        ON DELETE CASCADE,
    CONSTRAINT chk_fo CHECK (fo > 0)
);

-- Indexek a gyakori lekérdezésekhez
CREATE INDEX idx_foglalas_szallas ON Foglalas (szallasID);
CREATE INDEX idx_foglalas_felhasznalo ON Foglalas (felhasznaloID);
CREATE INDEX idx_szallas_feltolto ON Szallas (feltoltoID);

-- ------------------------------------------------------------
-- Automatikusan lefoglalt státuszra állítja a szállást, amint
-- születik hozzá egy foglalás - és megakadályozza, hogy egy
-- már lefoglalt szállást újra le lehessen foglalni.
-- ------------------------------------------------------------
DELIMITER $$

CREATE TRIGGER trg_foglalas_before_insert
BEFORE INSERT ON Foglalas
FOR EACH ROW
BEGIN
    IF (SELECT lefoglalva FROM Szallas WHERE szallasID = NEW.szallasID) = TRUE THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Ez a szállás már foglalt.';
    END IF;
END$$

CREATE TRIGGER trg_foglalas_after_insert
AFTER INSERT ON Foglalas
FOR EACH ROW
BEGIN
    UPDATE Szallas SET lefoglalva = TRUE WHERE szallasID = NEW.szallasID;
END$$

DELIMITER ;

-- Foglalás lemondásakor a szállás újra szabaddá válik:
-- DELETE FROM Foglalas WHERE foglalasID = ?;
-- UPDATE Szallas SET lefoglalva = FALSE WHERE szallasID = ?;
