'use strict';

var app = angular.module('madlibsApp');

app.controller('listController', function($scope, $state, Stories, ThemesFactory) {
	var themes = ThemesFactory.getAll()
	console.log(themes)
	$scope.themes = themes;
	// .then(result => {
	// 	$scope.themes = result.data.results
	// $scope.themes = result.data.results;	
	// })
	// .catch(err => {
	// 	console.log('err:', err);
	// })
});
app.controller('detailController', function($scope, $state) {
	
	// .then(result => {
		
	// })
	// .catch(err => {
	// 	console.log('err:', err);
	// })
});
