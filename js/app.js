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

  }])
  .constant('criteriaSearchValue', {
    'all': {name:'Tout', secondCriteria: []},
    'direction': {name:'Direction', secondCriteria: [{value:'DEI', name: 'DEI'},
                  {value: 'DO', name: 'DO'},
                  {value: 'DPG', name: 'DPG'},
                  {value: 'APM', name: 'APM'}]},
    'leader': {name: 'Animateur', secondCriteria: [{value: 'BTM', name:'MERCIER'}, {value: 'NULL', name:'...'}]},
    'title': {name: 'Titre', secondCriteria: [{value: 'Formation Angular', name:'Formation Angular'}]},
    'tag': {name: 'Tag', secondCriteria: [{value: 'JS', name:'Javascript'}, {value: 'Java', name:'Java'}]}
  });
