'use strict';

/**
 * @ngdoc service
 * @name angularjsApp.LoginService
 * @description
 * # LoginService
 * Service in the angularjsApp.
 */
angular.module('angularjsApp')
  .service('LoginService', function() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function isValidEmail(email) {
      let EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

      return EMAIL_REGEXP.test(email);
    }

    let service = {
        isValidEmail: isValidEmail
    };

    return service;

  });
