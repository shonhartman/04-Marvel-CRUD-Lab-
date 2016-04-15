/*
  Edit Team Controller
  -------------------

  STEP 1: Get the id out of $stateParams and save it to this.id

  STEP 2: Create your initial properties. You'll need one for newHeroName
          which is the value on the input field. It should default to an
          empty string. You'll also need one called heroes that will be an
          empty array.

  STEP 2: In getData(), use $http to get https://teams.mybluemix.net/api/teams/<team id>

          Set the response.data to this.team

  STEP 3: In getData(), below the stuff from STEP 2, make another get to:
          https://teams.mybluemix.net/api/heroes?filter[where][team_id]=<team id>

          Save response.data to this.heroes

  STEP 4: In addCharacter(), make a get request to:
          http://gateway.marvel.com:80/v1/public/characters?name=<new hero name>&apikey=<api key here>

          In the .then for that, make a second $http request to post to:
          https://teams.mybluemix.net/api/heroes

          Your post body should contain:
            * name - the name from the response
            * marvel_id - the id from the response
            * description - the description from the response
            * team_id - the value you stored in this.id that represents the current team
            * image - assemble this from the thumbnail in the response

    STEP 5: In your .then to the second promise in STEP 4, add response.data to your heroes
            array and clear the input field by resetting newHeroName

    STEP 6: In deleteCharacter, add a $http delete request to:
            https://teams.mybluemix.net/api/heroes/<hero id here>

            In the .then to the promise, you should use .splice to remove
            that hero from the heroes array.
*/

class EditTeamController {

	constructor($http, $stateParams) {
    this._$http = $http;
		this.id = $stateParams.id;
		this.newHeroName = "";
		this.heroes = [];

    this.getData();
	}

  getData() {
		this._$http
		.get(`https://teams.mybluemix.net/api/teams/${this.id}`)
		.then((response) => {
			console.log(response);
			this.team = response.data;
		});
		this._$http
		.get(`https://teams.mybluemix.net/api/heroes?filter[where][team_id]=${this.id}`)
		.then((response) =>{
			// console.log(response)
			this.heroes=response.data;
		});
  }

  addCharacter() {
		this._$http.get(`http://gateway.marvel.com:80/v1/public/characters?name=${this.newHeroName}&apikey=2a4fd1138bd131ee49b25af36d5f763a`)
		.then((response) => {
			console.log(response);
			this.name = response.data.data.results[0].name;
			this.marvel_id = response.data.data.results[0].id;
			this.description = response.data.data.results[0];
			this.image = `${response.data.data.reults[0].thumbnail.path}.${response.data.data.results[0].thumbnail.extension}`;

			this.$_http
			.post(`https://teams.mybluemix.net/api/heroes`, {
				name: this.name,
				marvel_id: this.marvel_id.id,
				description: this.description,
				team_id: this.id,
				image: this.image,

				})

				.then((response) => {
					this.heroes.push(response.data);
					this.newHeroName = "";
				});
  })

}

  deleteCharacter(hero) {
		this._$http
		.delete(`https://teams.mybluemix.net/api/heroes/${hero.id}`)
		.then((response) => {
			this.heroes.splice(this.heroes.indexOf(hero), 1);
		});
  }

}

export default EditTeamController
