'use strict';

angular.module('angularMagicApp')
  .factory('API_BASE_URL', function () {
    if (/localhost|\.dev$/.test(location.hostname)) {
      return (location.protocol || 'http:') + '//0.0.0.0:5000/';
    } else {
      return 'https://magic-api.herokuapp.com/';
    }
  });
