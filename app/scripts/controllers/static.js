'use strict';

/**
 * @ngdoc function
 * @name angularMagicApp.controller:StaticCtrl
 * @description
 * # StaticCtrl
 * Controller of the angularMagicApp
 */
angular.module('angularMagicApp')
  .controller('StaticCtrl', function ($scope, localStorageService) {
    var user = {
      lifepoints: 40,
      commanderDamage: 0
    };

    if (!localStorageService.get('users')) {
      localStorageService.set('users', {});
    }
    localStorageService.bind($scope, 'users');

    $scope.addUser = function(){
      $scope.users[$scope.name] = angular.copy(user);
      $scope.name = '';
    };

    $scope.changeValue = function(user, value, diff) {
      $scope.users[user][value] += diff;
    };

    $scope.resetUserNamed = function(name) {
      $scope.users[name] = angular.copy(user);
    };

    $scope.removeUserNamed = function(user) {
      delete $scope.users[user];
    };
  });
