'use strict';

/**
 * @ngdoc function
 * @name utoo.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of utoo
 */
angular.module('utoo').controller('TooltipDemoCtrl', function ($scope) {
  $scope.dynamicTooltip = 'Hello, World!';
  $scope.dynamicTooltipText = 'dynamic';
  $scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';
});