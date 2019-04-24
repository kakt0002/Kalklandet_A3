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
		document.querySelector("#menuknap").textContent = "☰"
	}
}


let statiske_sider = [];
document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {
	const url = "http://sophiasvane.dk/kea/07-cms/kalklandet_a3/wordpress/wp-json/wp/v2/statiske_sider/131";
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
		klon.querySelector(".titel").innerHTML = ret.title.rendered;
		klon.querySelector(".beskrivelse").innerHTML = ret.content.rendered;
		klon.querySelector(".pris").innerHTML = ret.pris;
		klon.querySelector(".kategori").innerHTML = ret.kategori;
		klon.querySelector(".foto").src = ret.billede.guid;
		dest.appendChild(klon);


	})
}
