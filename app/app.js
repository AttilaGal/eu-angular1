(function(){
		"use strict";

		angular
				.module('PokeDexApp', [
						'poke.filters',
						'poke-search',
						'poke-about',
						'poke-menu',
						'poke-detail',
						'poke-service',
						'ui.router'
				]);

		angular.module('PokeDexApp')
				.config(function($urlRouterProvider){
						$urlRouterProvider.otherwise('/search');
				});



})();
