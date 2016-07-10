'use strict';

/**
 * @ngdoc function
 * @name utoo.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of utoo
 */
angular.module('utoo')
  .controller('LoginCtrl', function($scope, $location,$timeout) {

    $scope.submit = function() {

      $location.path('/dashboard');

      return false;
    },
    $scope.signup = function() {

      $location.path('/signup');

      return false;
    }      
  });
