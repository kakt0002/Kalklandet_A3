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
        document.querySelector(".indhold").classList.remove("hidden");
        document.querySelector(".indhold2").classList.remove("hidden");
        document.querySelector(".footer").classList.remove("hidden");
    } else {
        //menuen er nu vist - ændr menuknap til x
        document.querySelector("#menuknap").innerHTML = "&times";
        document.querySelector(".logo").classList.add("hidden");
        document.querySelector(".indhold").classList.add("hidden");
        document.querySelector(".indhold2").classList.add("hidden");
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
let undervisningForlob = [];


function start() {
    let urlParams = new URLSearchParams(window.location.search);

    let id = urlParams.get("id");

    console.log(id);

    async function hentJson() {

        console.log("hent json");

        let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/undervisningsforlob/" + id;

        let myJson = await fetch(url);

        undervisningForlob = await myJson.json();

        visUndervisning();
    }


    function visUndervisning() {
        console.log("VIS UNDERVISNINGSFORLØB");


        document.querySelector(".undervisningsforløb_title").innerHTML = undervisningForlob.titel;
        document.querySelector(".undervisningsforløb_tekst").innerHTML = undervisningForlob.content.rendered;

        document.querySelector(".undervisningsforløb_varighed").innerHTML = undervisningForlob.varighed;

        document.querySelector(".undervisningsforløb_antal").innerHTML = undervisningForlob.antal_elever;

    }
    hentJson();
}
