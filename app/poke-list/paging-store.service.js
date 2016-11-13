(function () {
  "use strict";

  angular
    .module('poke-list')
    .factory('pagingStore', PagingStoreController);

  function PagingStoreController() {
    var vm = this;
    vm.listeners = {};
    vm.store = {
      currentPage: 1
    };
    vm.service = {
      getCurrentPage: getCurrentPage,
      setCurrentPage: setCurrentPage,
      addListener: addListener,
      removeListener: removeListener
    };
    return vm.service;


    //function implementations
    function getCurrentPage() {
      return vm.store.currentPage;
    }
    
    function setCurrentPage(page){
      console.log('setting page: ' + JSON.stringify(page));
      vm.store.currentPage = page;
      vm.listeners['page-change'] ? vm.listeners['page-change']() : null;
    }
    
    function addListener(name, callback){
      vm.listeners[name] = callback;
    }

    function removeListener(name){
      delete vm.listeners[name];
    }
  }
})();