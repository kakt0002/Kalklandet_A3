window.addEventListener("load", sidenVises);


var burgerknap = document.querySelector('.burgerknap');
var mobilmenu = document.querySelector('nav');
burgerknap.addEventListener("click", function () {
	if (mobilmenu.style.display == 'none' || mobilmenu.style.display == '') {
		mobilmenu.style.display = 'flex';
	} else {
		mobilmenu.style.display = 'none';
	}
});


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
