window.addEventListener("load", sidenVises);


function sidenVises() {
	console.log("siden vises!");
	// registrer klik på menu-knap
	document.querySelector("#menuknap").addEventListener("click", toggleMenu);
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
		document.querySelector("#menuknap").textContent = "X"
	}
}


let retter = [];
document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {
	const url = "http://mabe-kea.dk/F19/tema7/wp/wp-json/wp/v2/posts?per_page=50";
	const myJson = await fetch(url);
	retter = await myJson.json();
	console.log(myJson);
	visRetter();
}

function visRetter() {
	let dest = document.querySelector(".retter");
	let temp = document.querySelector("template");

	retter.forEach(ret => {
		let klon = temp.cloneNode(true).content;
		klon.querySelector("h2").innerHTML = ret.title.rendered;
		klon.querySelector("div").innerHTML = ret.excerpt.rendered;
		dest.appendChild(klon);
	})
}
