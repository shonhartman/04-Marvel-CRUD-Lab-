class PokemonController {
  constructor($http) {
    this._$http = $http;

    this.search = search;

  }

  doSearch() {
    this._$http
      .get(`http://netflixroulette.net/api/api.php`)

  }



}

export default PokemonController;
