'use strict';

angular.module('utoo')
	.directive('charts',function(){
		return {
        templateUrl:'scripts/directives/sidenav/charts/charts.html?v='+window.app_version,
        restrict: 'E',
        replace: true,
    	}
	});

