'use strict';

angular.module('utoo')
	.directive('notification',function(){
		return {
        templateUrl:'scripts/directives/sidenav/notification/notification.html',
        restrict: 'E',
        replace: true,
    	}
	});

