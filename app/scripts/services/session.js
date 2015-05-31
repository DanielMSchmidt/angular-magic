'use strict';

angular.module('angularMagicApp')
  .service('SessionService', function (API_BASE_URL) {
    var def = $.Deferred();

    return {
      create: function() {
        if (def.state() !== 'resolved') {
          $.getJSON(API_BASE_URL, {}, function(session){
            def.resolve(session);
          });
        }

        return def.promise();
      },

      join: function(token) {

      },

      get: function() {
        return def.promise();
      }
    };
  });
