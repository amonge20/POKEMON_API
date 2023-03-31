const PokemonAPI = require('./pokemonAPI');

const pokemonAPI = new PokemonAPI();

pokemonAPI.getPokemonByName('pikachu')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
