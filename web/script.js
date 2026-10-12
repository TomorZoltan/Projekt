const haz1 = {
    nev:"Panorámás apartman",
    szoveg:"Modern, világos apartman panorámás terasszal, ahonnan egyenesen az Adriára nyílik a kilátás. Nyitott terű nappali, teljesen felszerelt konyha-étkező, kényelmes hálószoba, üvegfalas zuhanyzós fürdőszoba várja a vendégeket. Pároknak és kisebb családoknak ideális pihenéshez.   Érkezés: 15:00 · Távozás: 10:00 · Max. 2 fő",
    fo:2,
    kep:"./kepek/elso szallas/elso_szallas_info_kepek.png",
    ar:33000
};
const haz2 = {
    nev:"Balaton-parti faház",
    szoveg:"Kétszintes faház közvetlenül a Balaton partján, terasszal és gondozott kerttel. Napnyugtakor a móló és a tűzrakó hely a legjobb hely a pihenésre. Bent légkondícionált, világos terek és felszerelt koynha várja a vendégeket.    Érkezés: 15:00 · Távozás: 10:00 · Max. 4 fő",
    fo:4,
    kep:"./kepek/masodik szallas/balaton_parti_fahaz_info_kepek.png",
    ar:38000
};
const haz3 = {
    nev:"Noszvaji hegyvidéki házikó",
    szoveg:"Hangulatos hegyvidéki házikó Noszvajon, erdős-dombos környezetben. A kandallós nappali, a két hálószoba és az üvegfalas zuhanyzós fürdőszoba mellett a kilátással bíró terasz teszi teljessé a kikapcsolódást családoknak és barátoknak.  Érkezés: 15:00 · Távozás: 10:00 · Max. 4 fő",
    fo:4,
    kep:"./kepek/harmadik szallas/noszvaji_hegyvideki_haziko_info_kepek.png",
    ar:32000
};
const haz4 = {
    nev:"Őrségi faház a természet ölelésében",
    szoveg:"Ez a szállás Őrség zöld csendjében, tágas kerttel és egy közeli tóval. Kandallós nappali, két hálószoba és fedett terasz várja azokat, akik a természetben töltenék a pihenést,(Grillezésre is van lehetőség).   Érkezés: 15:00 · Távozás: 10:00 · Max. 4 fő",
    fo:4,
    kep:"./kepek/negyedik szallas/orsegi_fahaz_info_kepek.png",
    ar:30000
};
const haz5 = {
    nev:"Pécsi belvárosi apartman",
    szoveg:"Kényelmes apartman Pécs belvárosában, a legfontosabb látnivalók sétatávolságban.Külön hálószoba, nappali étkezősarokkal és teljesen felszerelt konyha teszi ideálissá a párok és a városnéző utazók számára.  Érkezés: 15:00 · Távozás: 10:00 · Max. 4 fő",
    fo:2,
    kep:"./kepek/otodik szallas/pecsi_belvarosi_apartman_info_kepek.png",
    ar:24000
};

const hazak = [haz1,haz2,haz3,haz4,haz5]


let home_page = ` <div class="szallas-grid">
    <!-- 1. elem -->
    <div class="kep_felsorolas" onclick="house_load(this)" id="0">
        <h3>Panorámás Apartman (Horvátország)</h3>
       <!--  <img src="./kepek/elso szallas/Modern tengerparti otthon panorámás kilátással.png" alt="Panorámás Apartman" style="width: 100%; height: auto;"> -->
    </div>
    
    <!-- 2. elem -->
    <div class="kep_felsorolas" onclick="house_load(this)" id="1">
        <h3>Balaton-parti faház</h3>
       <!--  <img src="./kepek/masodik szallas/egeszhaz.png" alt="Balaton-parti faház" style="width: 100%; height: auto;"> -->
    </div>
    
    <!-- 3. elem -->
    <div class="kep_felsorolas" onclick="house_load(this)" id="2">
        <h3>Noszvaji hegyvidéki házikó</h3>
        <!-- <img src="./kepek/harmadik szallas/teljeshaz.png" alt="Noszvaji hegyvidéki házikó" style="width: 100%; height: auto;"> -->
    </div>
    
    <!-- 4. elem -->
    <div class="kep_felsorolas" onclick="house_load(this)" id="3">
        <h3>Őrségi faház a természet ölelésében</h3>
        <!-- <img src="./kepek/negyedik szallas/teljes.png" alt="Őrségi faház" style="width: 100%; height: auto;"> -->
    </div>
    
    <!-- 5. elem -->
    <div class="kep_felsorolas" onclick="house_load(this)" id="4">
        <h3>Pécsi belvárosi apartman</h3>
        <!-- <img src="./kepek/otodik szallas/utcai_kep.png" alt="Pécsi belvárosi apartman" style="width: 100%; height: auto;"> -->
    </div>
</div>
    
    
    `;
    
let login_page = `<div id="login_div">
    <h2>Bejelentkezés</h2>
    <p>Név</p>
    <input type="text">
    <p>Jelszó</p>
    <input type="password">
    <p onclick="login()" id="login_btn">Bejelentkezés</p>
    <p class="register_btn">Nincs még fiókja? <a onclick="register_load()" class="register_btn_2">Regisztráljon</a></p>
</div>`;
let register_page = `<div id="login_div">
    <h2>Regisztráció</h2>
    <p>Név</p>
    <input type="text" id="name">
    <p>Jelszó</p>
    <input type="password" id="password">
    <p>Jelszó újra</p>
    <input type="password" id="password_again">
    <p id="error">A két jelszó nem egyezik</p>
    <p onclick="register()" id="login_btn">Regisztráció</p>
</div>`;
let profile_page = ``;
const main = document.getElementById("main")

function main_load() {
    main.innerHTML = home_page;
}

function login_load() {
    main.innerHTML = login_page;
}
function house_load(object) {

    main.innerHTML = `<h2>${hazak[object.id].nev}<div id="price">${hazak[object.id].ar} Ft/éjszaka</div></h2> 
        <img src="${hazak[object.id].kep}" alt="1">
        <div id="textbox">${hazak[object.id].szoveg}</div>`;
}
function register_load() {
    main.innerHTML = register_page;

}

//Regiszráció
let jelszo;
let nev;
let profile = "";
function login(){
    console.log("TODO")
}
function register(){
    const j = document.getElementById("password")
    if (j.value == document.getElementById("password_again").value) {
        jelszo = j.value;
        nev = document.getElementById("name").value;
        console.log(jelszo)
    }
    else{
        document.getElementById("error").style = "visibility: visible";
    }
    const new_profile = {
        name: nev,
        password: jelszo
    }
    profile += JSON.stringify(new_profile)
    profile += ","

    console.log(profile)

}

//const jsonString = JSON.stringify(scrapedData, null, 2);
/*fs.writeFile('output.json', jsonString, 'utf8', (err) => {
  if (err) {
    console.error('❌ Error writing file:', err);
  } else {
    console.log('✅ Data successfully saved to output.json!');
  }
});
*/