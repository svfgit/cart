'use strict';

angular.module('utoo')
.directive('todolist',function(){
		return {
	    templateUrl:'scripts/directives/to-do-list/to-do.html?v='+window.app_version,
	    restrict: 'E',
	    replace: true,
    	controller: function($timeout){

			$timeout(function(){
    			$('.todolist').perfectScrollbar();
			}, 100);

        }
	}
});
