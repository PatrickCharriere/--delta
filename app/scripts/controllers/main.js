'use strict';

/**
 * @ngdoc function
 * @name imputationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the imputationApp
 */
angular.module('imputationApp')
  .controller('MainCtrl', ['$scope', '$location', function($scope, $location) {
  	
	$scope.goto = function(page){
		console.log(page)
		$location.path(page);
	}

  	$scope.init=function() {
  		$scope.imagePath='https://a.fastcompany.net/multisite_files/coexist/imagecache/1280/article_feature/1280-boston-ma-smart-city.jpg';
  	}
  	$scope.init();
  }]);
