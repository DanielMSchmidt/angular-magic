'use strict';

/**
 * @ngdoc function
 * @name angularMagicApp.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the angularMagicApp
 */
angular.module('angularMagicApp')
  .controller('JoinCtrl', function ($scope, sessionService) {
    $scope.controllsActive = true;

    $scope.join = function() {
      console.info('join session with key ' + $scope.session);
      $scope.controllsActive = false;

      // TODO: open up a websocket connection used in the game
    };
  });
