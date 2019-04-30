window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    // registrer klik på menu-knap
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    hentJson();
}

function toggleMenu() {
    console.log("Toggle menu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        //menuen er nu skjult - ændr menuknap til lll
        document.querySelector("#menuknap").textContent = "☰";
        document.querySelector(".logo").classList.remove("hidden");
        document.querySelector(".kontakt_tekst").classList.remove("hidden");
        document.querySelector(".footer").classList.remove("hidden");
    } else {
        //menuen er nu vist - ændr menuknap til x
        document.querySelector("#menuknap").innerHTML = "&times";
        document.querySelector(".logo").classList.add("hidden");
        document.querySelector(".kontakt_tekst").classList.add("hidden");
        document.querySelector(".footer").classList.add("hidden");
    }
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


"use strict"
let kontaktInformationer = [];


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
