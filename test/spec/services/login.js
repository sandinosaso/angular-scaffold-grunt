'use strict';

describe('Service: LoginService', function() {

  // load the service's module
  beforeEach(module('angularjsApp'));

  // instantiate service
  var LoginService;
  beforeEach(inject(function(_LoginService_) {
    LoginService = _LoginService_;
  }));

  it('should do something', function() {
    expect(!!LoginService).toBe(true);
  });

  it('should have a working LoginService service', inject(['LoginService',
    function(LoginService) {

      // test cases - testing for success
      var validEmails = [
        'test@test.com',
        'test@test.co.uk',
        'test734ltylytkliytkryety9ef@jb-fe.com'
      ];

      // test cases - testing for failure
      var invalidEmails = [
        'test@testcom',
        'test@ test.co.uk',
        'ghgf@fe.com.co.',
        'tes@t@test.com',
        ''
      ];

      // you can loop through arrays of test cases like this
      for (let i in validEmails) {
        let valid = LoginService.isValidEmail(validEmails[i]);
        expect(valid).toBeTruthy();
      }
      for (let i in invalidEmails) {
        let valid = LoginService.isValidEmail(invalidEmails[i]);
        expect(valid).toBeFalsy();
      }

    }])
  );

});


