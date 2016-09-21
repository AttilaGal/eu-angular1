(function(){
		"use strict";

		angular
				.module('poke-about')
				.component('pokeAbout', {
						templateUrl: 'poke-about/poke-about.template.html'
				})
				.config(function($stateProvider){
						$stateProvider
								.state('about',{
										url: '/about',
										component: 'pokeAbout'
								})
				})

})();