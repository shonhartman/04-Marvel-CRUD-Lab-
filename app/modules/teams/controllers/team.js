/*
  Team Controller
  ---------------

  STEP 1: Get the id from $stateParams and store it as this.id

  STEP 2: Create an empty array called this.heroes above the call
          to this.getData()

  STEP 3: In getData(), use $http to get https://teams.mybluemix.net/api/teams/<this.id goes here>

          Save response.data as this.team

  STEP 4: Below the call in STEP 3, add another $http get to:
          https://teams.mybluemix.net/api/heroes?filter[where][team_id]=<this.id goes here>

          Save response.data to this.heroes

*/

class TeamController {

	constructor($http, $stateParams) {
    this._$http = $http;
    this.id = $stateParams.id;
		this.heroes=[];



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
		.then ((response) => {
			this.heroes = response.data;
		})
  }

}

export default TeamController
