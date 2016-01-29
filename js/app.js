angular.module('Formation', ['ngRoute', 'ngMessages' ])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/formation/create', {
      templateUrl: 'views/formation/create.html',
      controller: 'FormationController'
    })
    .when('/formation/keywords/:keywords', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/formation/details/:formationID', {
      templateUrl: 'views/formation/details.html',
      controller: 'FormationController'
    })
    .otherwise({
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    });

  }]);
