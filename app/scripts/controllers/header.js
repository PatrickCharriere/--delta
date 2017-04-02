'use strict';

/**
 * @ngdoc function
 * @name imputationApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the imputationApp
 */
angular.module('imputationApp').controller('HeaderCtrl', ['$scope', '$location', '$timeout',
	function ($scope, $location, $timeout) {

		$scope.$on('$routeChangeStart', function(next, current) {
			var path = $location.path();
			path = path.substr(1, path.length-1);
			$scope.currentNavItem = path;
		});

		$scope.goto = function(page){
			$location.path(page);
		}

		$scope.init=function(){
			/*var path = $location.path();
			path = path.substr(1, path.length-1);
			$scope.currentNavItem = path;
			console.log($scope.currentNavItem)*/
		}
		$scope.init();

}]);

  //class="active"
