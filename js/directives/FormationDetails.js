angular.module('Formation')
  .directive('formationDetails', function() {

    return {
      restrict: 'E',
      scope : {
        user: '=',
        formation: '='
      },
      templateUrl: '/views/formation/detailsTemplate.html'
    }

  });
