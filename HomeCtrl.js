(function() {
    const app = angular.module('rootapp', []);
    
    app.controller('HomeCtrl', ['$scope', function($scope) {
      $scope.msg = 'angular';
    }]);
  })(angular);