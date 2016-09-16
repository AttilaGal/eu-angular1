(function() {
    'use strict';

    angular
        .module('PokeDexApp')
        .filter('numberformat', filterFunction);
    
    function filterFunction(){
        return function(input){
            input = "" + input;
            var pad = "000";
            return pad.substring(0, pad.length - input.length) + input;
        }
    }
})();