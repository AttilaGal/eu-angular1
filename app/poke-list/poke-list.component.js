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
    vm.allPokemon = pokeService.getAll();
    vm.currentPage = 1;
    vm.filteredPage = sliceToPage(pokeService.getAll());

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
    };

    //paging related

    vm.pageChange = function (page) {
      vm.currentPage = page;
      vm.filteredPage = sliceToPage(vm.filteredPokemon);
    };

    vm.$onChanges = function (changesObj) {
      if (changesObj.pokename || changesObj.poketype) {
        vm.filteredPage = sliceToPage(pokeService.getAll().filter(filterByName).filter(filterByType));
      }
    };

    //helper functions

    function filterByName(p) {
      return p.name.indexOf(vm.pokename) > -1;
    };

    function filterByType(p) {
      var containstype = false;
      p.type.forEach(function (t) {
        t.indexOf(vm.poketype) > -1 ? containstype = true : null
      });
      return containstype;
    };

    function sliceToPage(array) {
      vm.filteredPokemon = array;
      return array.sort(function (a, b) {
          return a.id - b.id
        })
        .slice((vm.currentPage - 1) * 10, (vm.currentPage - 1) * 10 + 10);
    };
  }
})();