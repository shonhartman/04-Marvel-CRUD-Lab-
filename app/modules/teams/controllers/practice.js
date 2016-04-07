class ExampleController {
  constructor($http) {
    this._$http = $http;
    this.pokemans = [];
    this.searchTerm = "";
    this.search = "";
    this.getPokemans();
  }

  doSearch() {
    c

  }

  getPokemans() {
    this._$http.get(`http://pokeapi.co/api/v2/pokemon`)
    .then((response) => {
      this.pokemans = response.data.results(response.data);
    });
  }
}
