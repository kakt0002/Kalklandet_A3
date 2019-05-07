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
        document.querySelector(".footer").classList.remove("hidden");
    } else {
        //menuen er nu vist - ændr menuknap til x
        document.querySelector("#menuknap").innerHTML = "&times";
        document.querySelector(".logo").classList.add("hidden");
        document.querySelector(".indhold").classList.add("hidden");
        document.querySelector(".footer").classList.add("hidden");
    }
}

// Denne nedenstående kode er taget fra W3Schools under How to -> Menus -> Accordion

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

    let indhold = [];
    let indhold2 = [];
    let indhold3 = [];
    let guidet_tur1 = [];
    let guidet_tur2 = [];
    let guidet_tur3 = [];
    let guidet_tur4 = [];


    async function hentJson() {

        console.log("hent json 1");

        let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/priser_tider/159";

        let myJson = await fetch(url);

        indhold = await myJson.json();

        visIndhold();
    }


    function visIndhold() {
        console.log("VIS TEKST");


        document.querySelector(".pris_tekst").innerHTML = indhold.content.rendered;

        document.querySelector(".pris_voksne").innerHTML = `Pris for voksne: ` + indhold.pris_for_voksne;

        document.querySelector(".pris_pensionist").innerHTML =
            `Pris for pensionister og studerende: ` + indhold.pris_for_pensionister_og_studerende;

        document.querySelector(".pris_6-17").innerHTML =
            `Pris for børn mellem 6-17 år: ` + indhold.pris_for_6_17;

        document.querySelector(".pris_0-5").innerHTML =
            `Pris for børn mellem 0-5 år: ` + indhold.pris_for_0_5;


        document.querySelector(".åbningstider_wp").innerHTML = indhold.abningstider;

        document.querySelector(".åbningstider_wp_special").innerHTML = indhold.special_abningstider;
    }

    hentJson();


    async function hentJson2() {

        console.log("hent json 2");

        let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/statiske_sider/185";

        let myJson = await fetch(url);

        indhold2 = await myJson.json();

        visIndhold2();
    }


    function visIndhold2() {
        console.log("VIS TEKST HANDICAP");


        document.querySelector(".handicapforhold h2").innerHTML = indhold2.title.rendered;
        document.querySelector(".handicapforhold p").innerHTML = indhold2.content.rendered;

    }

    hentJson2();


    async function hentJson3() {

        console.log("hent json 3");

        let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/statiske_sider/187";

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


    async function hentJson4() {

        console.log("hent json 4");

        let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/priser_tider/192";

        let myJson = await fetch(url);

        guidet_turIndhold = await myJson.json();

        visIndhold4();
    }


    function visIndhold4() {
        console.log("VIS TEKST GUIDET TUR 1");


        document.querySelector(".pris_tekst_guidet_tur1").innerHTML = guidet_turIndhold.content.rendered;

        document.querySelector(".pris_voksne_guidet_tur1").innerHTML = `Pris for voksne: ` + guidet_turIndhold.pris_for_voksne;

        document.querySelector(".pris_pensionist_guidet_tur1").innerHTML =
            `Pris for pensionister og studerende: ` + guidet_turIndhold.pris_for_pensionister_og_studerende;

        document.querySelector(".pris_6-17_guidet_tur1").innerHTML =
            `Pris for børn mellem 6-17 år: ` + guidet_turIndhold.pris_for_6_17;

        document.querySelector(".pris_0-5_guidet_tur1").innerHTML =
            `Pris for børn mellem 0-5 år: ` + guidet_turIndhold.pris_for_0_5;

    }

    hentJson4();


    async function hentJson5() {

        console.log("hent json 5");

        let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/priser_tider/191";

        let myJson = await fetch(url);

        guidet_turIndhold = await myJson.json();

        visIndhold5();
    }


    function visIndhold5() {
        console.log("VIS TEKST GUIDET TUR 2");


        document.querySelector(".pris_tekst_guidet_tur2").innerHTML = guidet_turIndhold.content.rendered;

        document.querySelector(".pris_voksne_guidet_tur2").innerHTML = `Pris for voksne: ` + guidet_turIndhold.pris_for_voksne;

        document.querySelector(".pris_pensionist_guidet_tur2").innerHTML =
            `Pris for pensionister og studerende: ` + guidet_turIndhold.pris_for_pensionister_og_studerende;

        document.querySelector(".pris_6-17_guidet_tur2").innerHTML =
            `Pris for børn mellem 6-17 år: ` + guidet_turIndhold.pris_for_6_17;

        document.querySelector(".pris_0-5_guidet_tur2").innerHTML =
            `Pris for børn mellem 0-5 år: ` + guidet_turIndhold.pris_for_0_5;

    }

    hentJson5();


    async function hentJson6() {

        console.log("hent json 6");

        let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/priser_tider/190";

        let myJson = await fetch(url);

        guidet_turIndhold = await myJson.json();

        visIndhold6();
    }


    function visIndhold6() {
        console.log("VIS TEKST GUIDET TUR 3");


        document.querySelector(".pris_tekst_guidet_tur3").innerHTML = guidet_turIndhold.content.rendered;

        document.querySelector(".pris_voksne_guidet_tur3").innerHTML = `Pris for voksne: ` + guidet_turIndhold.pris_for_voksne;

        document.querySelector(".pris_pensionist_guidet_tur3").innerHTML =
            `Pris for pensionister og studerende: ` + guidet_turIndhold.pris_for_pensionister_og_studerende;

        document.querySelector(".pris_6-17_guidet_tur3").innerHTML =
            `Pris for børn mellem 6-17 år: ` + guidet_turIndhold.pris_for_6_17;

        document.querySelector(".pris_0-5_guidet_tur3").innerHTML =
            `Pris for børn mellem 0-5 år: ` + guidet_turIndhold.pris_for_0_5;

    }

    hentJson6();


    async function hentJson7() {

        console.log("hent json 7");

        let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/priser_tider/190";

        let myJson = await fetch(url);

        guidet_turIndhold = await myJson.json();

        visIndhold7();
    }


    function visIndhold7() {
        console.log("VIS TEKST GUIDET TUR 4");


        document.querySelector(".pris_tekst_guidet_tur4").innerHTML = guidet_turIndhold.content.rendered;

        document.querySelector(".pris_voksne_guidet_tur4").innerHTML = `Pris for voksne: ` + guidet_turIndhold.pris_for_voksne;

        document.querySelector(".pris_pensionist_guidet_tur4").innerHTML =
            `Pris for pensionister og studerende: ` + guidet_turIndhold.pris_for_pensionister_og_studerende;

        document.querySelector(".pris_6-17_guidet_tur4").innerHTML =
            `Pris for børn mellem 6-17 år: ` + guidet_turIndhold.pris_for_6_17;

        document.querySelector(".pris_0-5_guidet_tur4").innerHTML =
            `Pris for børn mellem 0-5 år: ` + guidet_turIndhold.pris_for_0_5;

    }

    hentJson7();
}
