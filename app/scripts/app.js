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
	'ngRoute', 'ngMaterial', 'ngMessages'
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



angularApp
    .controller('AppCtrl', function($scope) {
        $scope.cards = [{
            text: 'Bla bla bla bla bla bla bla ',
            title: 'Bla'
        }, {
            text: 'Bla bla bla bla bla bla bla ',
            title: 'Bla'
        }, {
            text: 'Bla bla bla bla bla bla bla ',
            title: 'Bla'
        }, {
            text: 'Bla bla bla bla bla bla bla ',
            title: 'Bla'
        }, {
            text: 'Bla bla bla bla bla bla bla ',
            title: 'Bla'
        }, {
            text: 'Bla bla bla bla bla bla bla ',
            title: 'Bla'
        }, {
            text: 'Bla bla bla bla bla bla bla ',
            title: 'Bla'
        }, {
            text: 'Bla bla bla bla bla bla bla ',
            title: 'Bla'
        }, {
            text: 'Bla bla bla bla bla bla bla ',
            title: 'Bla'
        }, {
            text: 'Bla bla bla bla bla bla bla ',
            title: 'Bla'
        }, {
            text: 'Bla bla bla bla bla bla bla ',
            title: 'Bla'
        }, {
            text: 'Bla bla bla bla bla bla bla ',
            title: 'Bla'
        }, {
            text: 'Bla bla bla bla bla bla bla ',
            title: 'Bla'
        }, {
            text: 'Bla bla bla bla bla bla bla ',
            title: 'Bla'
        }];
        $scope.displayContent = true;
        $scope.toggleContent = function(showContent) {
            $scope.displayContent = showContent;
        };
    });



angularApp.config(function ($routeProvider,$mdThemingProvider,$mdDateLocaleProvider) {
	$mdThemingProvider.theme('dark-grey')
	.backgroundPalette('grey')
	.dark();
	$mdThemingProvider.theme('default')
	.primaryPalette('indigo', {
		'default': '500',
		'hue-1': '400',
		'hue-2': '800',
		'hue-3': 'A100'
	})
	.accentPalette('orange')
	.warnPalette('deep-orange')
	.backgroundPalette('grey');


	$mdDateLocaleProvider.formatDate = function(date) {
		return moment(date).format('DD.MM.YYYY');
};


	$routeProvider
	.when('/home', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl',
		controllerAs: 'main'
	})
	.when('/imputation', {
		templateUrl: 'views/impute.html',
		controller: 'ImputeCtrl',
		controllerAs: 'impute'
	})
	.when('/dashboard', {
		templateUrl: 'views/dashboard.html',
		controller: 'DashboardCtrl',
		controllerAs: 'dashboard'
	})
	.when('/settings', {
		templateUrl: 'views/settings.html',
		controller: 'SettingsCtrl',
		controllerAs: 'settings'
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
