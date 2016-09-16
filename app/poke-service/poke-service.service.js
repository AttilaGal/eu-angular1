(function(){
		"use strict";

		angular
				.module('poke-service')
				.factory('pokeService', PokeService);

		PokeService.$inject = ['POKEDATA', '$http', '$q'];
		function PokeService(POKEDATA, $http, $q) {
				var service = {
						getAll: getAll,
						getEvolutionById: getEvolutionById
				};
				return service;
				
				//function implementations
				function getAll(){
						return POKEDATA.pokedex;
				}

				function getEvolutionById(id){
						return $q(function (resolve, reject) {
								$http.get('http://pokeapi.co/api/v1/pokemon/' + id)
										.then(
												function success(response){
														var evolution = null;
														if(response.data.evolutions.length > 0){
																evolution = response.data.evolutions[0].to;
														}
														resolve(evolution);
												},
												function error(response){
														reject();
												})
						})
				}
		}

})();