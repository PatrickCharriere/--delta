'use strict';

/**
 * @ngdoc overview
 * @name imputationApp
 * @description
 * # imputationApp
 *
 * Main module of the application.
 */
var angularApp = angular.module('imputationApp', [
	'ngRoute', 'ngMaterial'
]);

angularApp.factory('safeApply', ['$rootScope',function($rootScope) {
	return function($scope){
		var phase = null;
		if($scope.$root){
			phase = $scope.$root.$$phase;
			if(!(phase == '$apply' || phase == '$digest')) {
				$scope.$apply();
			}
		}else{
			phase = $scope.$$phase;
			if(!(phase == '$apply' || phase == '$digest')) {
				$scope.$apply();
			}
		}
	};
}]);







angularApp.config(function ($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl',
			controllerAs: 'main'
		})
		.when('/impute', {
			templateUrl: 'views/impute.html',
			controller: 'ImputeCtrl',
			controllerAs: 'impute'
		})
		.when('/dashboard', {
			templateUrl: 'views/dashboard.html',
			controller: 'DashboardCtrl',
			controllerAs: 'dashboard'
		})
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutCtrl',
			controllerAs: 'about'
		})
		.otherwise({
			redirectTo: '/home'
		});
});
