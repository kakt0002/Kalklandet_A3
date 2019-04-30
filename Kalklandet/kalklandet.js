        document.addEventListener("DOMContentLoaded", sidenVises);


        function sidenVises() {
            console.log("siden vises");

            document.querySelector(".menu").classList.add("hidden");

            document.querySelector(".menuknap").addEventListener("click", toggleMenu);

        }



        function toggleMenu() {
            console.log("toggle menu");

            document.querySelector(".menu").classList.toggle("hidden");

            let erSkjult = document.querySelector(".menu").classList.contains("hidden");

            if (erSkjult == true) {
                document.querySelector(".menuknap").textContent = "☰";
            } else {
                document.querySelector(".menuknap").textContent = "X";
            }
        }




        start();


        function start() {

            "use strict"
            let ForsideTekst = [];
            let boksTekst = [];


            let filter = "kalklandet.dk";
            let detSker = [];

            let kontaktInformationer = [];



            document.querySelectorAll(".filter").forEach(elm => {
                elm.addEventListener("click", filtrering)
            })



            function filtrering() {
                filter = this.getAttribute("data-filter");
                console.log(this.getAttribute("data-filter"), filter);

                visDetSker();


            }



            async function hentJson1() {

                console.log("hent json 1");

                let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/statiske_sider/202";

                let myJson = await fetch(url);

                ForsideTekst = await myJson.json();

                visForsideTekst();
            }


            function visForsideTekst() {
                console.log("VIS FORSIDE TEKST");


                document.querySelector(".item2 p").innerHTML = ForsideTekst.content.rendered;

            }

            hentJson1();


            async function hentJson2() {

                console.log("hent json 2");

                let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/statiske_sider/131";

                let myJson = await fetch(url);

                boksTekst = await myJson.json();

                visBoksTekst();
            }


            function visBoksTekst() {
                console.log("VIS BOKS TEKST");

                document.querySelector(".nested-item1 h2").innerHTML = boksTekst.title.rendered;
                document.querySelector(".nested-item1 p").innerHTML = boksTekst.content.rendered;

            }

            hentJson2();





            async function hentJson3() {

                console.log("hent json 3");

                let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/begivenhed";

                let myJson = await fetch(url);
                detSker = await myJson.json();

                visDetSker();
            }



            function visDetSker() {
                console.log("VIS DET SKER");


                let dest = document.querySelector(".begivenhed");
                let temp = document.querySelector("template");


                detSker.forEach(detSker => {
                    let klon = temp.cloneNode(true).content;

                    klon.querySelector(".dato p").innerHTML = detSker.dato;
                    klon.querySelector(".det-sker-text p").innerHTML = detSker.title.rendered;


                    dest.appendChild(klon);
                    dest.lastElementChild.addEventListener("click", () => {

                        location.href = "/Kalklandet/kalklandet-begivenhed.html?id=" + detSker.id;
                    })



                })

            }

            hentJson3();

        }



        window.addEventListener("load", sidenVises);

        function sidenVises() {
            console.log("siden vises");

            document.querySelector(".menu").classList.add("hidden");

            document.querySelector(".menuknap").addEventListener("click", toggleMenu);

        }



        function toggleMenu() {
            console.log("toggle menu");

            document.querySelector(".menu").classList.toggle("hidden");

            let erSkjult = document.querySelector(".menu").classList.contains("hidden");

            if (erSkjult == true) {
                document.querySelector(".menuknap").textContent = "☰";
            } else {
                document.querySelector(".menuknap").textContent = "X";
            }
        }
