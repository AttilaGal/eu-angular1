(function () {
  "use strict";

  angular
    .module('PokeDexApp', [
      'poke.filters',
      'poke-search',
      'ui.router'
    ])

  angular.module('PokeDexApp')
    .config(function ($urlRouterProvider) {
      $urlRouterProvider.otherwise('/search');
    });


})();
