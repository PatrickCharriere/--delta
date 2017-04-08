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







angularApp.config(function ($routeProvider,$mdThemingProvider) {
	$mdThemingProvider.theme('default')
	.primaryPalette('indigo', {
		'default': '400',
		'hue-1': '100',
		'hue-2': '600',
		'hue-3': 'A100'
	})
	.accentPalette('amber')
	.warnPalette('red')
	.backgroundPalette('grey');

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
