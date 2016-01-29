angular.module('Formation')
  .controller('NavbarController', ['$scope', '$location', function($scope, $location) {


    $scope.create = function() {
      $location.path('/formation/create');
    }


  }]);
