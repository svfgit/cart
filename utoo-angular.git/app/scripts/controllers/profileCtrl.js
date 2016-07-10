'use strict';

/**
 * @ngdoc function
 * @name AniTheme.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of AniTheme
 */
 angular.module('utoo').controller('proCtrl', function ($scope, $location, $window) {

 	$scope.refresh = function  () {
 		location.reload();
 	}
 	// console.log($window.innerWidth);

 	// if ($location.path() == "/dashboard/profile" && $window.innerWidth <= '767' ) {
 	// 	$("#body-container").css('position','static');
 	// }

 	 	
 });