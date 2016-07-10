'use strict';

/**
 * @ngdoc function
 * @name utoo.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of utoo
 */
 angular.module('utoo').controller('DropdownCtrl', function ($scope, $timeout) {
    $scope.toppings = [
    { category: 'meat', name: 'Pepperoni' },
    { category: 'meat', name: 'Sausage' },
    { category: 'meat', name: 'Ground Beef' },
    { category: 'meat', name: 'Bacon' },
    { category: 'veg', name: 'Mushrooms' },
    { category: 'veg', name: 'Onion' },
    { category: 'veg', name: 'Green Pepper' },
    { category: 'veg', name: 'Green Olives' },
    ];
    $scope.loadUsers = function() {
    // Use timeout to simulate a 650ms request.
    $scope.users = [];
    return $timeout(function() {
      $scope.users = [
        { id: 1, name: 'Scooby Doo' },
        { id: 2, name: 'Shaggy Rodgers' },
        { id: 3, name: 'Fred Jones' },
        { id: 4, name: 'Daphne Blake' },
        { id: 5, name: 'Velma Dinkley' },
      ];
    }, 750);
  };
  $scope.clearValue = function() {
    $scope.myModel = undefined;
  };
  $scope.save = function() {
    alert('Form was valid!');
  };

});