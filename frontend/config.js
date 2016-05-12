(function() {
  'use strict';

  angular
    .module('ccApp', ['ui.router'])
    .config(config)
    .constant('host', 'http://localhost:3000');
    
    function config($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');
      
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: './components/home/home.html',
          controller: 'HomeCtrl',
          controllerAs: 'homeCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: './components/dashboard/dashboard.html',
          controller: 'DashboardCtrl',
          controllerAs: 'dashboardCtrl'
        });
        
    }
})();