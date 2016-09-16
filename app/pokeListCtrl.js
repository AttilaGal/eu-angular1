(function(){
		"use strict";

		angular
				.module('PokeDexApp')
				.controller('pokeListController', PokeListController);

		function PokeListController(){
				//controller logic
				var vm = this;
				vm.clicked = function () {
						alert('clicked')
				}
		}

})();