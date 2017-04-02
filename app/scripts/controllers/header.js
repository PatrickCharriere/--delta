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
			$('.nav .active').removeClass('active');
			var path = $location.path();
			path = path.substr(1, path.length-1);
			$('#header_'+path).addClass('active');
		});

		$scope.init=function() {

		}
		$scope.init();

}]);

  //class="active"
