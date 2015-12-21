'use strict';

/* App Module */

var myApp = angular.module('myApp', [
	'ngRoute',
	'myControllers'
]);

myApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/weather', {
				templateUrl: 'part/w-list.html',
				controller: 'WeatherListCtrl'
			}).
			when ('/weather/:weatherId',{
				templateUrl: 'part/w-detail.html',
				controller: 'WeatherDetailCtrl'
			}).
			otherwise({
				redirectTo: '/weather'
			});
}]);