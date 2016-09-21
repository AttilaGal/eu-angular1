(function(){
	"use strict";

	angular
		.module('poke-detail')
		.component('pokeDetail', {
			templateUrl: 'poke-detail/poke-detail.template.html',
			bindings: {
				id: '<'
			},
			controller: PokeDetailController
		});
	
	PokeDetailController.$inject = ['PokeService', '$state'];
	function PokeDetailController(PokeService, $state){
		var vm = this;
		
		vm.pokemon = PokeService.getById(vm.id) ;

		vm.classType = function (type) {
			return "type-" + type;
		};

		vm.previous = function(){
			vm.id > 1 ?  $state.go('detail', {id: vm.id--}) : null ;
		};

		vm.next = function(){
			vm.id < 151 ?  $state.go('detail', {id: vm.id++}) : null ;
		};


	}

})();


