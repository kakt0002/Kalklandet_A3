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


function start() {
    async function hentJson() {

        console.log("hent json 1");

        let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/priser_tider/164";

        let myJson = await fetch(url);

        indhold = await myJson.json();

        visIndhold();
    }


    function visIndhold() {
        console.log("VIS TEKST");


        document.querySelector(".pris_tekst_guidet_tur").innerHTML = indhold.content.rendered;

        document.querySelector(".pris_voksne_guidet_tur").innerHTML = `Pris for voksne: ` + indhold.pris_for_voksne;

        document.querySelector(".pris_pensionist_guidet_tur").innerHTML =
            `Pris for pensionister og studerende: ` + indhold.pris_for_pensionister_og_studerende;

        document.querySelector(".pris_6-17_guidet_tur").innerHTML =
            `Pris for børn mellem 6-17 år: ` + indhold.pris_for_6_17;

        document.querySelector(".pris_0-5_guidet_tur").innerHTML =
            `Pris for børn mellem 0-5 år: ` + indhold.pris_for_0_5;


        document.querySelector(".åbningstider_wp").innerHTML = indhold.abningstider;

    }

    hentJson();




    async function hentJson3() {

        console.log("hent json 3");

        let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/statiske_sider/209";

        let myJson = await fetch(url);

        indhold3 = await myJson.json();

        visIndhold3();
    }


    function visIndhold3() {
        console.log("VIS TEKST ÅBNINGSTIDER");


        document.querySelector(".find_vej h2").innerHTML = indhold3.title.rendered;
        document.querySelector(".find_vej p").innerHTML = indhold3.content.rendered;


    }

    hentJson3();

}
