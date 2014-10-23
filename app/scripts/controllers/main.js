'use strict';

/**
 * @ngdoc function
 * @name angularMagicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMagicApp
 */
angular.module('angularMagicApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var user = {
      lifepoints: 40,
      commanderDamage: 0
    };

    localStorageService.get('users') || localStorageService.set('users', {});
    localStorageService.bind($scope, 'users');

    $scope.addUser = function(){
      $scope.users[$scope.name] = angular.copy(user);
      $scope.name = '';
    };

    $scope.changeValue = function(user, value, diff) {
      $scope.users[user][value] += diff;
    };
  });
