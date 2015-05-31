'use strict';

/**
 * @ngdoc function
 * @name angularMagicApp.controller:InteractiveCtrl
 * @description
 * # InteractiveCtrl
 * Controller of the angularMagicApp
 */
angular.module('angularMagicApp')
  .controller('InteractiveCtrl', function ($scope, SessionService) {
    SessionService.create().then(function(response) {
      $scope.sessionId = response.identifier;
      $scope.$digest()
    });
  });
