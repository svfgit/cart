'use strict';

angular.module('utoo')
	.directive('sidenav',function(){
		return {
	        templateUrl:'scripts/directives/sidenav/sidenav.html?v='+window.app_version,
	        restrict: 'E',
	        replace: true,
	        controller: function($scope, $timeout){

	        		$timeout(function(){
		    			$('#sidenav').perfectScrollbar();
					}, 100);

	        },
	       
	        link: function(scope, el, attrs){

	        	setTimeout(function(){

		        	scope.perfectSCrollbarObj = el.find('#sidenav').perfectScrollbar();

	        	}, 0);


	        }
    	}
	});


