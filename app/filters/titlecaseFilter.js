(function () {
  'use strict';

  angular
    .module('poke.filters')
    .filter('titlecase', filterFunction);

  function filterFunction() {
    return function (input) {
      var splitStr = input.toLowerCase().split(' ');
      for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      // Directly return the joined string
      return splitStr.join(' ');
    }
  }
})();