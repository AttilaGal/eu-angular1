(function () {
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
    vm.loading = null;

    vm.evolutionInfo = function (pokename, id) {
      if (!vm.loading) {
        vm.loading = id;
        pokeService.getEvolutionById(id).then(
          function success(evolution) {
            var message;
            if (evolution) {
              message = pokename + ' evolves into ' + evolution + '!';
            } else {
              message = pokename + ' has no evolution.'
            }
            alert(message);
          },
          function error() {
            alert('failed to retrieve pokemon evolution');
          }
        ).finally(function () {
          vm.loading = null;
        });
      }
    };

    vm.classType = function (type) {
      return 'type-' + type;
    };

    vm.pokedex = pokeService.getAll();

    vm.isLoading = function (id) {
      return vm.loading == id;
    }
  }
})();