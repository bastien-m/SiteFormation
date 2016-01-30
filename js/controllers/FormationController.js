angular.module('Formation')
  .controller('FormationController', ['$scope', '$routeParams', '$location', 'FormationFactory', 'UserFactory',
   function($scope, $routeParams, $location, FormationFactory, UserFactory) {

     var getFormationList = function(inOrOut) {
       var listIdFormation = UserFactory.get().formations[inOrOut];
       var match = [];
       angular.forEach(listIdFormation, function(id) {
         match.push(FormationFactory.get(id));
       });
       return match;
     };


    (function() {
      if ($location.path() === '/formation/in') {
        $scope.formations = getFormationList('in');
        $scope.type = 'formationIn';
      }
      else if ($location.path() == '/formation/out') {
        console.log('out');
        $scope.formations = getFormationList('out');
        $scope.type = 'formationOut';
      }
      else {
        $scope.formation = FormationFactory.get($routeParams.formationID);
      }
    })();



    $scope.back = function(url) {
      $location.path(url);
    }

  }]);
