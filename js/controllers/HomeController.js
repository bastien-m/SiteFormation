angular.module('Formation')
  .controller('HomeController', ['$scope', '$routeParams', '$location', 'FormationFactory', function($scope, $routeParams, $location, FormationFactory) {


    if ($routeParams != null && angular.isDefined($routeParams.keywords)) {
      $scope.formations = FormationFactory.findByKeywords([$routeParams.keywords]);
    }
    else {
      $scope.formations = FormationFactory.get();
    }




    $scope.showDetails = function(formation) {
      $location.path('/formation/details/' + formation.id);
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
