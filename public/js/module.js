var app = angular.module('madlibsApp', ['ui.router', 'ui.bootstrap.modal']);

app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('list', {
			url: '/list',
			templateUrl: '/html_templates/list.html',
			controller: 'listController'
		})
		.state('form', {
			url: '/form',
			templateUrl: '/html_templates/form.html',
			controller: 'formController'
		})
		.state('story', {
			url: '/story',
			templateUrl: '/html_templates/story.html',
			controller: 'storyController'
		})
		.state('modal', {
			url: '/modal',
			templateUrl: '/html_templates/modal.html',
			controller: 'modalController'
		})

	$urlRouterProvider.otherwise('/');

});