window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    // registrer klik på menu-knap
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    start();
}

function toggleMenu() {
    console.log("Toggle menu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        //menuen er nu skjult - ændr menuknap til lll
        document.querySelector("#menuknap").textContent = "☰";
        document.querySelector(".logo").classList.remove("hidden");
        document.querySelector("#basic_info").classList.remove("hidden");
        document.querySelector(".parent_pil").classList.remove("hidden");
        document.querySelector("#laes_mere").classList.remove("hidden");
        document.querySelector(".footer").classList.remove("hidden");
    } else {
        //menuen er nu vist - ændr menuknap til x
        document.querySelector("#menuknap").innerHTML = "&times";
        document.querySelector(".logo").classList.add("hidden");
        document.querySelector("#basic_info").classList.add("hidden");
        document.querySelector(".parent_pil").classList.add("hidden");
        document.querySelector("#laes_mere").classList.add("hidden");
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
let indhold = [];


function start() {
    async function hentJson() {

        console.log("hent json 1");

        let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/statiske_sider/198";

        let myJson = await fetch(url);

        indhold = await myJson.json();

        visIndhold();
    }


    function visIndhold() {
        console.log("VIS TEKST");

        document.querySelector(".om_titel").innerHTML = indhold.title.rendered;
        document.querySelector(".om_tekst").innerHTML = indhold.content.rendered;
    }
    hentJson();
}
