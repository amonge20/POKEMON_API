const axios = require('axios');

class PokemonAPI {
  constructor() {
    this.baseURL = 'https://pokeapi.co/api/v2';
  }

  async getPokemonByName(name) {
    try {
      const response = await axios.get(`${this.baseURL}/pokemon/${name}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getPokemonById(id) {
    try {
      const response = await axios.get(`${this.baseURL}/pokemon/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getRandomPokemon() {
    try {
      const response = await axios.get(`${this.baseURL}/pokemon/?limit=1&offset=${Math.floor(Math.random() * 1118)}`);
      const pokemonName = response.data.results[0].name;
      const pokemonData = await this.getPokemonByName(pokemonName);
      return pokemonData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

module.exports = PokemonAPI;
