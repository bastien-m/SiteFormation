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
      $scope.user = UserFactory.get('BTM');
      if ($location.path() === '/formation/in') {
        $scope.formations = getFormationList('in');
      }
      else if ($location.path() == '/formation/out') {
        console.log('out');
        $scope.formations = getFormationList('out');
      }
      else {
        $scope.formation = FormationFactory.get($routeParams.formationID);
      }
    })();

    $scope.notAlreadyRegisterToThisFormation = function() {
      console.log(_.intersection($scope.user.formations.in, $scope.formation).length == 0);
      return _.intersection($scope.user.formations.in, $scope.formation).length == 0;
    }

    $scope.back = function(url) {
      $location.path(url);
    }

  }]);
