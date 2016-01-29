angular.module('Formation')
  .controller('FormationController', ['$scope', '$routeParams', '$location', 'FormationFactory', function($scope, $routeParams, $location, FormationFactory) {

    (function() {
      console.log($routeParams.formationID);
      $scope.formation = FormationFactory.get($routeParams.formationID);

    })();


    $scope.showListInPopup = function(list) {

    }



    $scope.back = function(url) {
      $location.path(url);
    }

  }]);
