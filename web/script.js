let home_page = ` <div class="kep_felsorolas" onclick="house_load()">
        <h3>Panorámás Apartman (Horvátország)</h3>
        <img src="./kepek/elso szallas/haloszoba.png" alt="1">
    </div>
    <div class="kep_felsorolas" onclick="house_load()">
        <h3>Panorámás Apartman (Horvátország)</h3>
        <img src="./kepek/elso szallas/haloszoba.png" alt="1">
    </div>`;
let login_page = `<div id="login_div">
    <h2>Bejelentkezés</h2>
    <p>Név</p>
    <input type="text">
    <p>Jelszó</p>
    <input type="text">
    <p class="register_btn">Nincs még fiókja? <a onclick="register_load()">Regisztráljon</a></p>
</div>`;
let register_page = `<div id="login_div">
    <h2>Regisztráció</h2>
    <p>Név</p>
    <input type="text">
    <p>Jelszó</p>
    <input type="text">
</div>`;
let profile_page = ``;
let house_page = `<img src="./kepek/elso szallas/elso_szallas_info.png" alt="1">` //1 oldal, változók cserélődnek
const main = document.getElementById("main")

function main_load() {
    main.innerHTML = home_page;
}

function login_load() {
    main.innerHTML = login_page;
}
function house_load() {
    main.innerHTML = house_page;
}
function register_load() {
    main.innerHTML = register_page;

}