'use strict';

/**
 * @ngdoc function
 * @name imputationApp.controller:ImputeCtrl
 * @description
 * # ImputeCtrl
 * Controller of the imputationApp
 */
angular.module('imputationApp')
  .controller('ImputeCtrl', ['$scope', function($scope) {
	
	$scope.init = function(){
		$scope.weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
	}
	$scope.init();

  }]);
