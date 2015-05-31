'use strict';

/**
 * @ngdoc overview
 * @name angularMagicApp
 * @description
 * # angularMagicApp
 *
 * Main module of the application.
 */
angular
  .module('angularMagicApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/interactive', {
        templateUrl: 'views/interactive.html',
        controller: 'InteractiveCtrl'
      })
      .when('/static', {
        templateUrl: 'views/static.html',
        controller: 'StaticCtrl'
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
