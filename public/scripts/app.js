'use strict';

var app = angular.module('publicApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'leaflet-directive'
  ]);

app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
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

      $locationProvider.html5Mode(true);
  }]);
