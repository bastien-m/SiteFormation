angular.module('Formation')
.controller('HomeController', ['$scope', '$routeParams', '$location', 'FormationFactory', 'criteriaSearchValue',
function($scope, $routeParams, $location, FormationFactory, criteriaSearchValue) {

  //at init
  (function() {
    $scope.firstCriteria = criteriaSearchValue.value[0];
    $scope.firstCriterias  = criteriaSearchValue.value;
    $scope.secondCriterias = [];

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


  $scope.searchByCriteria = function(firstCriteria, secondCriteria) {
    if (firstCriteria.id === 'all') {
      $scope.formations = FormationFactory.get();
    }
    else {
      $scope.formations = FormationFactory.findByCriteria(firstCriteria, secondCriteria);
    }
  }


  $scope.firstCriteriaChanged = function() {
    console.log('firstCriteriaChanged');
    $scope.secondCriterias = $scope.firstCriteria.secondCriteria;
    if ($scope.secondCriterias.length > 0)
      $scope.secondCriteria = $scope.secondCriterias[0];
    $scope.searchByCriteria($scope.firstCriteria, $scope.secondCriteria);
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
