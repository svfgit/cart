'use strict';

angular.module('utoo')
	.directive('footer',function(){
		return {
        templateUrl:'scripts/directives/footer/footer.html?v='+window.app_version,
        restrict: 'E',
        replace: true,
    	}
	});

