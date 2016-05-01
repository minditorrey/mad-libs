var app = angular.module('madlibsApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('list', {
			url: '/list',
			templateUrl: '/html_templates/list.html',
			controller: 'listController'
		})
		.state('form', {
			url: '/detail/:id',
			templateUrl: '/html_templates/form.html',
			controller: 'detailController'
		})
		.state('story', {
			url: '/story',
			templateUrl: '/html/story.html',
			controller: 'storyController'
		})

	$urlRouterProvider.otherwise('/');

});