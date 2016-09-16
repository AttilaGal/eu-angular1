(function() {
'use strict';

    angular
        .module('poke-list')
        .component('pokeList', {
            bindings: {
                pokename: '@',
                poketype: '@'
            },
            templateUrl: 'poke-list/poke-list.template.html',
            controller: PokeListController,
            controllerAs: 'pokeListCtrl'
        });

    PokeListController.$inject = ['pokeService'];
    function PokeListController(pokeService) {
        var vm = this;

        vm.isAwesome = function(pokename){
            alert(pokename + ' is awesome!');
        };

        vm.classType = function(type){
            return 'type-' + type;
        };

        vm.pokedex = pokeService.getAll();
    }
})();