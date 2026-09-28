let home_page = `<p>Betöltött!<p>`
let profile_page = ``;
let register_page = ``;
let house_page = `` //1 oldal, változók cserélődnek
const main = document.getElementById("main")
function main_betoltes() {
    main.innerHTML = home_page;
}

function home_page_open() {
    main.innerHTML = home_page
}