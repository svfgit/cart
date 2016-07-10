'use strict';

/**
 * @ngdoc function
 * @name utoo.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of utoo
 */
angular.module('utoo').controller('PopoverDemoCtrl', function ($scope) {
  $scope.dynamicPopover = 'Hello, World!';
  $scope.dynamicPopoverTitle = 'Title';
});