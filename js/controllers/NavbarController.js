angular.module('Formation')
  .controller('NavbarController', ['$scope', '$location', '$rootScope', 'FormationFactory',
   function($scope, $location, $rootScope, FormationFactory) {

    $scope.valueChanged = function(value, event) {
      //if enter key pressed
      if (event.keyCode === 13) $scope.search(value);
    }

    $scope.search = function(value) {
      $rootScope.$broadcast('searchEvent', FormationFactory.findBySearchAll(value));
    }

    $scope.create = function() {
      $location.path('/formation/create');
    }


  }]);
