'use strict';

/**
 * @ngdoc overview
 * @name imputationApp
 * @description
 * # imputationApp
 *
 * Main module of the application.
 */
angular
	.module('imputationApp', [
		'ngRoute', 'ngMaterial'
	])
	.config(function ($routeProvider) {
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
