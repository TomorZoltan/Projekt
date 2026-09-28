# Projekt


## A projektben résztvevők:
Antal Dániel  
Fülöp Péter  
Tömör Zoltán  

## Project leírása:
Egy online piactér, amelyen keresztül magánszemélyek és vállalkozások foglalhatnak le rövid távú szállásokat.

Amikor a felhasználó megnyitja a weboldalt először a szállások láthatóak az árakkal.
A jobb felső sarokban látható lesz a felhasználó fiókja, ha nincs bejelentkezve a felhasználó, akkor a neve helyett egy bejelentkezés/regisztráció szöveg jelenik meg, erre kattintva megjelenik a bejelentkező felület.  
A szállásokra kattintva megjelenik egy rövidebb leírás, cím, képek a szállásról és a tulaj elérhetősége, mellette, hogy mikor lehet lefoglalni.
A foglalás a weboldalon történik és a megadott telefonszámon keresztül lehet megbeszélni a tulajjal a további részleteket.

## Projekt feladatok
### Weboldal
- **Fejléc** - logóval, felhasználó nevével, amire kattintva betölt a felhasználó profilja
- **Test** - A következő "oldalakat" tölti be javascriptből, attól függően, hogy melyik az aktuális
  -  *Szállások* - felsorolja az összes aktuálisan elérthető szállást
  -  *Bejelentkezési felület* - bejelentkezni vagy regisztrálni lehet (név, jelszó, telefonszám)
  -  *Felhasználó profilja* - a felhasználó neve, lefoglalt szállásai
  -  *Szállás adatai* - képek, neve, ár, helyszín, szolgáltatások
- **Lábléc** - a készítők nevei, a képek forrássa
### Adatbázis
Felhasznalo (**felhasznaloID**,nev,jelszo)  
Szallas (**szallasID**,nev,ar,hely,kep,maxFo,lefoglalva,szolgaltatasok,*felhasznaloID*)  
Foglalas(**foglalasID**,*szallasID*,*felhasznaloID*,fo)  

##### Felhasznalo
**felhasznaloID** int  
nev string  
jelszo string  
telefonszam string  

#### Szallas
**szallasID** int  
nev string  
ar int  
hely string  
kep string  
maxFo int  
szolgaltatasok string
*feltoltoID* int  
lefoglalva boolean  

#### Foglalas
**foglalasID** int  
*szallasID* int  
*felhasznaloID* int  
fo int  


### TODO
- info 3 részre osztása --> képek közeli megnézése
- ár/lefoglalás kivágása, gomb csinálás
- magyar/angol, eur/huf;
