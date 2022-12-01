let div = document.querySelector(".div");
let menu = document.querySelector(".icon-menu")
var icon = document.querySelector(".icon-menu i")


menu.addEventListener("click", function(){
    let barraMenuAberto = document.querySelector("#barra-menu");
    let dadosMenu = document.querySelector("#barra-menu ul");

    if(barraMenuAberto.style.width == "0px"){
        icon.className = "fa-solid fa-xmark";
        barraMenuAberto.style.width = "180px";
        dadosMenu.style.display = "flex"
        document.querySelector(".icon-menu").style.width = "180px";
        document.querySelector("#icon-login").style.display = "flex"
        document.querySelector("#x-menu").style.display = "flex"
    }else{
        barraMenuAberto.style.width = "0px";
        document.querySelector(".icon-menu").style.width = "0px";
        icon.className = "fa-solid fa-bars";
        dadosMenu.style.display = "none"
        div.style.display = "none";
        document.querySelector("#icon-login").style.display = "none"
        document.querySelector("#x-menu").style.display = "none"
    }
})

let linkOpcoes = document.querySelector(".a");
let clickVestimentas = document.querySelector(".barra-menu ul li ul");

linkOpcoes.addEventListener("click", function(){
    

    if(clickVestimentas.style.display == "none"){
    clickVestimentas.style.display = "flex";
    var body = document.querySelector("body");
    body.style.background = "red";
    
}
})
