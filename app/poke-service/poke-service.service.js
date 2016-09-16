(function(){
		"use strict";

		angular
				.module('poke-service')
				.factory('pokeService', PokeService);

		PokeService.$inject = ['POKEDATA'];
		function PokeService(POKEDATA) {
				var service = {
						getAll: getAll
				};
				return service;
				
				//function implementations
				function getAll(){
						return POKEDATA.pokedex;
				}
		}

})();