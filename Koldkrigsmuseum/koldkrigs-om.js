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

  "use strict"
        let indhold = [];

        document.addEventListener("DOMContentLoaded", start);


        function start() {
            async function hentJson() {

                console.log("hent json 1");

                let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/statiske_sider/194";

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
