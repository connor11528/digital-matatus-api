'use strict';

angular.module('publicApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/developers', {
        templateUrl: 'views/developers.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
