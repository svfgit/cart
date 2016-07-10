'use strict';

/**
 * @ngdoc function
 * @name utoo.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of utoo
 */
angular.module('utoo').controller('ButtonsCtrl', function ($scope) {
  $scope.singleModel = 1;

  $scope.radioModel = 'Middle';

  $scope.checkModel = {
    left: false,
    middle: true,
    right: false
  };
});