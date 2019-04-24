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
let ForsideTekst = [];
let boksTekst = [];
let detSker = [];

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
