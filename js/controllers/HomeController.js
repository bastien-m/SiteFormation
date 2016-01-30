angular.module('Formation')
.controller('HomeController', ['$scope', '$routeParams', '$location', 'FormationFactory', 'criteriaSearchValue',
function($scope, $routeParams, $location, FormationFactory, criteriaSearchValue) {

  //at init
  (function() {
    $scope.firstCriteria = "all";

    if ($routeParams != null && angular.isDefined($routeParams.keywords)) {
      $scope.formations = FormationFactory.findByKeywords([$routeParams.keywords]);
    }
    else {
      $scope.formations = FormationFactory.get();
    }
  })();

  $scope.$on('searchEvent', function(event, searchResult) {
    $scope.formations = searchResult;
  });




  $scope.firstCriteriaChanged = function() {
    //$scope.options = [];
    $scope.options = criteriaSearchValue[$scope.firstCriteria];
    console.log($scope.firstCriteria);
    console.log($scope.options);
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
