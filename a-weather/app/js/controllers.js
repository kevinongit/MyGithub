'use strict'

var myControllers = angular.module('myControllers', []);

myControllers.controller('WeatherListCtrl', ['$scope', '$http',
	function($scope, $http) {
		$http.get('wdata/test.json').success(function(data) {
			$scope.hourly = data.hourly;
			$scope.forecast = data.forecast;
		})
		
	}]);