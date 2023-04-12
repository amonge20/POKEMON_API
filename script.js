var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		var response = JSON.parse(this.responseText);
		var pokemon = response.results;

		for (var i = 0; i < pokemon.length; i++) {
			getPokemonInfo(pokemon[i].url);
		}
	}
});

xhr.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=10000");
xhr.send(null);

function getPokemonInfo(url) {
	var xhr = new XMLHttpRequest();

	xhr.addEventListener("readystatechange", function () {
		if (this.readyState === this.DONE) {
			var response = JSON.parse(this.responseText);

			displayPokemon(response);
		}
	});

	xhr.open("GET", url);
	xhr.send(null);
}

function displayPokemon(pokemon) {
	var pokedex = document.getElementById("pokedex");

	var card = document.createElement("div");
	card.classList.add("card");

	var name = document.createElement("h2");
	name.innerText = pokemon.name;

	var image = document.createElement("img");
	image.src = pokemon.sprites.front_default;

	var types = document.createElement("p");
	types.innerText = "Type(s): ";

	for (var i = 0; i < pokemon.types.length; i++) {
		var type = pokemon.types[i].type.name;

		if (i === pokemon.types.length - 1) {
			types.innerText += type;
		} else {
			types.innerText += type + ", ";
		}
	}

	card.appendChild(name);
	card.appendChild(image);
	card.appendChild(types);

	pokedex.appendChild(card);
}