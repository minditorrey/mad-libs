'use strict';

var app = angular.module('madlibsApp');


app.controller('listController', function($scope, $state, ThemesFactory) {
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

app.controller('formController', function($scope) {
	
});

app.controller('modalController', function($scope, $state, $uibModal, $log, SpeechValuesFactory) {

	this.openModal = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: '/html_templates/modal.html',
      controller: function ($scope, $uibModalInstance, items) {
      	$scope.items = items;
      },

      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
  	var speechValues = SpeechValuesFactory.getAll()
	console.log(speechValues)
	$scope.speechValues = speechValues;
});




