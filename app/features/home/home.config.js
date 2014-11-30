(function () {
  "use strict";

  angular.module('app').config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider.state('home', {
      url : '/home',
      templateUrl : 'app/features/home/home.html',
      controller : 'Home',
      controllerAs : 'vm'
    });
  }
}());

