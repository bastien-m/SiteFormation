angular.module('Formation', ['ngRoute', 'ngMessages' ])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/formation/:formationID', {
      templateUrl: 'views/formation/details.html',
      controller: 'FormationController'
    })
    .otherwise({
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    });

  }]);
