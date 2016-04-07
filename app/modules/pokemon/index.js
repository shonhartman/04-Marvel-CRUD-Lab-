import angular from 'angular';

import config from './config';
import controller from './conroller';

let pokemon = angular.module('tiy.pokemon', []);

pokemon.config(config);
pokemon.controller('PokemonController')

export default 
