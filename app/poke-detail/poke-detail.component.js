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
		})
			.config(function($stateProvider){
					$stateProvider
							.state('detail',{
									url: '/detail/:id',
									component: 'pokeDetail',
									resolve: {
											id: function($stateParams){
													return $stateParams.id;
											}
									}
							});
			});
	
	PokeDetailController.$inject = ['pokeService', '$state'];
	function PokeDetailController(pokeService, $state){
		var vm = this;
		
		vm.pokemon = pokeService.getById(vm.id) ;

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


