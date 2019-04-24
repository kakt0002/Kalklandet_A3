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
        let ForsideTekst = [];
        let boksTekst = [];
        let detSker = [];
        let kontaktInformationer = [];

        document.addEventListener("DOMContentLoaded", start);


        function start() {
            async function hentJson1() {

                console.log("hent json 1");

                let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/statiske_sider/131";

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

                let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/begivenhed?per_page=5";

                let myJson = await fetch(url);
                detSker = await myJson.json();

                visDetSker();
            }


            function visDetSker() {
                console.log("VIS DET SKER");

                let dest = document.querySelector(".begivenhed");
                let temp = document.querySelector("template");



                detSker.forEach(begivenhed => {
                    let klon = temp.cloneNode(true).content;

                    klon.querySelector(".dato p").innerHTML = begivenhed.dato;
                    klon.querySelector(".det-sker-text").innerHTML = begivenhed.title.rendered;


                    dest.appendChild(klon);
                })

            }

            hentJson3();



            async function hentJson4() {

                console.log("hent json 4");

                let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/kontakt_os/72";

                let myJson = await fetch(url);
                kontaktInformationer = await myJson.json();

                visFooter();
            }


            function visFooter() {
                console.log("VIS footer");



                document.querySelector(".firmanavn").innerHTML = kontaktInformationer.firmaets_navn;
                document.querySelector(".adresse").innerHTML = kontaktInformationer.adresse;
                document.querySelector(".åbningstider").innerHTML = `Telefontid: ` + kontaktInformationer.telefontid;
                document.querySelector(".tlf").innerHTML = `Tlf: ` + kontaktInformationer.tlf;
                document.querySelector(".mail").innerHTML = `Mail: ` + kontaktInformationer.mail;


            }

            hentJson4();







        }

