(function () {
  'use strict';

  angular.module('poke-search')
    .component('pokeSearch', {
      templateUrl: 'poke-search/poke-search.template.html'
    })
    .config(function ($stateProvider) {
      $stateProvider
        .state('search', {
          url: '/search',
          component: 'pokeSearch'
        })
    })

})();