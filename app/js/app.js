'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/list', {templateUrl: 'partials/list.html', controller: 'ListCtrl'});
    $routeProvider.when('/edit/:id', {templateUrl: 'partials/edit.html', controller: 'EditCtrl'});
    $routeProvider.otherwise({redirectTo: '/list'});

    $locationProvider.html5Mode(false).hashPrefix("!");
  }]);
