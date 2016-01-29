angular.module('Formation')
  .controller('HomeController', ['$scope', '$location', 'FormationFactory', function($scope, $location, FormationFactory) {


    $scope.formations = FormationFactory.get();


    $scope.showDetails = function(formation) {
      $location.path('/formation/' + formation.id);
    }

    $scope.range = function(min, max, step) {
      step = step || 1;
      var input = [];
      for (var i = min; i < max; i += step) {
          input.push(i);
      }
      return input;
  };

  }]);
