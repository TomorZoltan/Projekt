import { hazak } from "./javascript/hazak.js";
import { login_page, register_page, profile_page, home_page } from "./javascript/pages.js";


const main = document.getElementById("main")

window.addEventListener("load", ()=>{
    main_load();
    
})

document.getElementById("logo").addEventListener("click", ()=>{
    main_load();
})
document.getElementById("header-h1").addEventListener("click", ()=>{
    main_load();
})
document.getElementById("felhasznalo_profil").addEventListener("click", ()=>{
    login_load();
    regisztralas();
})

const regisztralas = () =>{
        document.getElementById("register_btn").addEventListener("click",()=>{
    register_load()
    document.getElementById("register_btn_2").addEventListener("click",()=>{
    register()})

})
}

/*document.getElementById("login_btn").addEventListener("click",()=>{
    login()
})*/

const load_houses = () => {
    for (let i = 0; i < hazak.length; i++) {
        const element = document.getElementById(i.toString());
        if (element) {
            element.addEventListener("click", () => house_load(i));
        }
    }
};


function main_load() {
    main.innerHTML = home_page;
    load_houses();
}

function login_load() {
    main.innerHTML = login_page;
}

function house_load(object) {
    main.innerHTML = `<h2>${hazak[object].nev}<div id="price">${hazak[object].ar} Ft/éjszaka</div></h2> 
        <img src="${hazak[object].kep}" alt="1">
        <div id="textbox">${hazak[object].szoveg}</div>`;
}
function register_load() {
    main.innerHTML = register_page;

}

//Regiszráció
let jelszo;
let nev;
let profile = [];
/*function login_check(name) {
    console.log(document.getElementById("login_name").value)
    return name = document.getElementById("login_name").value;
}
function login(){
     let login_index = profile.findIndex(login_check())
     if (login_index == -1) {
        console.log("HIBA")
     }
     else if (document.getElementById("login_password").value == profile[login_index].password) {
         document.getElementById("felhasznalo_profil").innerHTML = profile[login_index].name
        }
        else{
         console.log(profile[login_index].name)
         console.log(document.getElementById("login_password").value)
     }
}*/
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
    profile.push(new_profile)

}