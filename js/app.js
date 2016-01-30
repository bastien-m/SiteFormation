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
    .when('/formation/out', {
      templateUrl: 'views/formation/list.html',
      controller: 'FormationController'
    })
    .when('/formation/in', {
      templateUrl: 'views/formation/list.html',
      controller: 'FormationController'
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
  .constant('criteriaSearchValue', {value: [
    {name:'Tout', id : 'all', secondCriteria: []},
    {name:'Direction', id: 'direction', secondCriteria: [{value:'DEI', name: 'DEI'},
                  {value: 'DO', name: 'DO'},
                  {value: 'DPG', name: 'DPG'},
                  {value: 'APM', name: 'APM'}]},
    {name: 'Animateur', id: 'leader', secondCriteria: [{value: 'B.MERCIER', name:'MERCIER'}, {value: 'NULL', name:'...'}]},
    {name: 'Titre', id:'title', secondCriteria: [{value: 'Formation Angular', name:'Formation Angular'}]},
    {name: 'Tag', id:'tag', secondCriteria: [{value: 'JS', name:'Javascript'},
                                              {value: 'Java', name:'Java'}]
    }
  ]});
