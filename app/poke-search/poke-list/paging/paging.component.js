(function() {
    'use strict';

    angular
        .module('poke-list')
        .component('paging', {
            bindings: {
                callback: '&',
                totalItems: '@',
                perPage: '@'
            },
            templateUrl: 'poke-search/poke-list/paging/paging.template.html',
            controller: PagingController
        });

    function PagingController(){
        var vm = this;
        vm.currentPage = 1;
        vm.maxPage = Math.ceil( vm.totalItems / vm.perPage );

        vm.first = function(){
            vm.currentPage = 1;
            vm.callback({page: vm.currentPage});
        };

        vm.previous = function(){
            vm.currentPage > 1 ? vm.currentPage-- : vm.currentPage; 
            vm.callback({page: vm.currentPage});
        };

        vm.next = function(){
            vm.currentPage < vm.maxPage? vm.currentPage++ : null ;
            vm.callback({page: vm.currentPage});
        };

        vm.last = function(){
            vm.currentPage = vm.maxPage;
            vm.callback({page: vm.currentPage});
        };

        vm.$onChanges = function(changesObj){
            if(changesObj.totalItems){
                vm.maxPage = Math.ceil( vm.totalItems / vm.perPage );
            }
        };
    }
})();