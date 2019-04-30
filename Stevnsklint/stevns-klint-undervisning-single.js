//window.addEventListener("load", sidenVises);
//
//function sidenVises() {
//    console.log("siden vises!");
//    // registrer klik på menu-knap
//    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
//    document.querySelector("#knap_laes_mere").addEventListener("click", down);
//}
//
//function toggleMenu() {
//    console.log("Toggle menu");
//    document.querySelector("#menu").classList.toggle("hidden");
//
//    let erSkjult = document.querySelector("#menu").classList.contains("hidden");
//
//    if (erSkjult == true) {
//        //menuen er nu skjult - ændr menuknap til lll
//        document.querySelector("#menuknap").textContent = "☰";
//    } else {
//        //menuen er nu vist - ændr menuknap til x
//        document.querySelector("#menuknap").textContent = "☰"
//    }
//}
//
//
//
//function down() {
//    console.log("vis læs mere");
//
//    document.querySelector("#knap_laes_mere").removeEventListener("click", down);
//    document.querySelector(".viewport").classList.remove(".overflow");
//
//}


start();

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
