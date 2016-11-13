(function () {
  'use strict';

  angular
    .module('poke-list')
    .component('paging', {
      bindings: {
        totalItems: '@',
        perPage: '@'
      },
      templateUrl: 'poke-list/paging/paging.template.html',
      controller: PagingController
    });

  PagingController.$inject = ['pagingStore'];
  function PagingController(pagingStore) {
    var vm = this;
    vm.currentPage = pagingStore.getCurrentPage();
    vm.maxPage = Math.ceil(vm.totalItems / vm.perPage);

    vm.first = function () {
      vm.currentPage = 1;
      vm.updatePagingStore();
    };

    vm.previous = function () {
      vm.currentPage > 1 ? vm.currentPage-- : vm.currentPage;
      vm.updatePagingStore();
    };

    vm.next = function () {
      vm.currentPage < vm.maxPage ? vm.currentPage++ : null;
      vm.updatePagingStore();
    };

    vm.last = function () {
      vm.currentPage = vm.maxPage;
      vm.updatePagingStore();
    };

    vm.updatePagingStore = function(){
      pagingStore.setCurrentPage(vm.currentPage);
    };

    vm.$onChanges = function (changesObj) {
      if (changesObj.totalItems) {
        vm.maxPage = Math.ceil(vm.totalItems / vm.perPage);
      }
    };
  }
})();