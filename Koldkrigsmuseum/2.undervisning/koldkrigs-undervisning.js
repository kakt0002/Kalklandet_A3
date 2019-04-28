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



function down() {
	console.log("vis læs mere");

	document.querySelector("#knap_laes_mere").removeEventListener("click", down);
	document.querySelector(".viewport").classList.remove(".overflow");

}


"use strict"
let undervisningForlob = [];

document.addEventListener("DOMContentLoaded", start);


function start() {


	async function hentJson() {

		console.log("hent json");

		let url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/undervisningsforlob/?categories=5";

		let myJson = await fetch(url);

		undervisningForlob = await myJson.json();

		visUndervisning();
	}


	function visUndervisning() {
		console.log("VIS UNDERVISNINGSFORLØB");


		let dest = document.querySelector(".undervisningsforløb");
		let temp = document.querySelector("template");



		undervisningForlob.forEach(undervisningForlob => {
			let klon = temp.cloneNode(true).content;

			klon.querySelector(".undervisningsforløb h1").innerHTML = undervisningForlob.title.rendered;
			klon.querySelector(".undervisningsforløb p").innerHTML = undervisningForlob.maalgruppe;


			dest.appendChild(klon);
		})

	}


	hentJson();

}
