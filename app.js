(function() {
    const app = angular.module('rootapp', ['ui.router']);
    
    app.config(['$urlRouterProvider', '$stateProvider', 
    function($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');
      
      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
      });
    }]);
  })(angular);