class PokemonController {
  constructor($http) {
    this._$http = $http;
    this.pokemans = [];
    this.detData();
    this.search = search;

  }

  getData () {
    this._$http
    .get(`https://pokeapi.co/api/v2/pokemon`)
    .then((response) => {
      this.pokemans = respons.data.results;
    });

  }

  addPokemon(pokemon) {
    this.team.push(pokemon);
  }

  deletePokemon(pokemon) {
    this.team.splice(this.team.indexOf(pokemon), 1);
  }
}

export default PokemonController;
