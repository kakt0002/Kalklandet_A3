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

	document.querySelector(".viewport").classList.remove("overflow");
	document.querySelector("#knap_laes_mere").removeEventListener("click", down);

}
