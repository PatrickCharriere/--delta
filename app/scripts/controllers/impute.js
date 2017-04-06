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
	
  	$scope.companyList=[
  	{
  		name:"Ingenico",
  		BU: {
  			name:"Professional Services"
  		}
  	},{
  		name:"Astek",
  		BU: {
  			name:""
  		}
  	}
  	]

  	$scope.createYearSelector=function(){
  		var date = new Date();
  		var year = date.getFullYear();
  		$scope.years = [];
  		for(var i = year-10; i <= year; i++) {
  			$scope.years.push(i);
  		}
  		console.log($scope.years)
  	}

	$scope.init = function(){
		
		$scope.weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
		
		$scope.createYearSelector();

	}
	$scope.init();

  }]);
