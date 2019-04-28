window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises!");
    // registrer klik på menu-knap
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    document.querySelector("#knap_laes_mere").addEventListener("click", down);
}

function toggleMenu() {
    console.log("Toggle menu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        //menuen er nu skjult - ændr menuknap til lll
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        //menuen er nu vist - ændr menuknap til x
        document.querySelector("#menuknap").textContent = "☰"
    }
}



function down() {
    console.log("vis læs mere");

    document.querySelector("#knap_laes_mere").removeEventListener("click", down);
    document.querySelector(".viewport").classList.remove(".overflow");

}


"use strict"
let kontaktInformationer = [];

document.addEventListener("DOMContentLoaded", hentJson);

console.log("hent json  - test");

async function hentJson() {

    console.log("hent json");

    let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/kontakt_os/75";

    let myJson = await fetch(url);

    kontaktInformationer = await myJson.json();

    visKontaktInformationer();
}


function visKontaktInformationer() {
    console.log("VIS KONTAKTINFORMATIONER");


    document.querySelector(".titel").innerHTML = kontaktInformationer.title.rendered;
    document.querySelector(".text").innerHTML = kontaktInformationer.tekst;
    document.querySelector(".firmanavn").innerHTML = kontaktInformationer.firmaets_navn;
    document.querySelector(".adresse").innerHTML = kontaktInformationer.adresse;
    document.querySelector(".åbningstider").innerHTML = `Telefontid: ` + kontaktInformationer.telefontid;
    document.querySelector(".tlf").innerHTML = `Tlf: ` + kontaktInformationer.tlf;
    document.querySelector(".mail").innerHTML = `Mail: ` + kontaktInformationer.mail;


    hentJson();


}
