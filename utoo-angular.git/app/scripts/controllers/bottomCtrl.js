'use strict';

/**
 * @ngdoc function
 * @name utoo.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of utoo
 */
angular.module('utoo')



.controller('bottomCtrl', function($scope, $timeout, $mdBottomSheet) {
  $scope.alert = '';
  $scope.showListBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'views/pages/dashboard/ui-elements/alerts/list-bottom-sheet.html',
      controller: 'ListBottomSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
  };
   $scope.showGridBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'views/pages/dashboard/ui-elements/alerts/grid-bottom-sheet.html',
      controller: 'GridBottomSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
  };

})
.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
    $scope.items = [
    { name: 'Share' },
    { name: 'Upload' },
    { name: 'Copy' },
    { name: 'Print this page' },
    ];
    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
})
.controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Hangout'},
    { name: 'Mail'},
    { name: 'Message'},
    { name: 'Copy'},
    { name: 'Facebook'},
    { name: 'Twitter'},
  ];
  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
});

