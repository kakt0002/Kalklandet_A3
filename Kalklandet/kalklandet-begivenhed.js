        var burgerknap = document.querySelector('.burgerknap');
        var mobilmenu = document.querySelector('nav');
        burgerknap.addEventListener("click", function () {
            if (mobilmenu.style.display == 'none' || mobilmenu.style.display == '') {
                mobilmenu.style.display = 'flex';
            } else {
                mobilmenu.style.display = 'none';
            }
        });



        "use strict"
        let indhold = [];

        document.addEventListener("DOMContentLoaded", hentJson);

        console.log("hent json  - test");

        async function hentJson() {

            console.log("hent json");

            let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/begivenhed/150";

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
