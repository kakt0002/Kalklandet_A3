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

    document.addEventListener("DOMContentLoaded", start);

    console.log("hent json  - test");


    function start() {

        let urlParams = new URLSearchParams(window.location.search);

        let id = urlParams.get("id");

        console.log(id);


        hentJson();



        async function hentJson() {

            console.log("hent json");

            let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/begivenhed/" + id;

            let myJson = await fetch(url);

            indhold = await myJson.json();

            visBegivenhed();
        }


        function visBegivenhed() {
            console.log("VIS BEGIVENHED");


            document.querySelector(".titel").innerHTML = indhold.title.rendered;

            document.querySelector(".tekst").innerHTML = indhold.content.rendered;

            document.querySelector(".dato").innerHTML = indhold.dato;


            document.querySelector(".foto").src = indhold.billede.guid;


            hentJson();


        }

    }
