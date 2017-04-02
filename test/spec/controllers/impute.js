'use strict';

describe('Controller: ImputeCtrl', function () {

  // load the controller's module
  beforeEach(module('imputationApp'));

  var ImputeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ImputeCtrl = $controller('ImputeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ImputeCtrl.awesomeThings.length).toBe(3);
  });
});
