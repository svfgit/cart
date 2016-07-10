'use strict';

angular.module('utoo')
	.directive('topnav',function(){
		return {
	        templateUrl:'scripts/directives/topnav/topnav.html?v='+window.app_version,
	        restrict: 'E',
	        replace: true,
	        /*priority: -500,*/
	        controller: function($scope, SweetAlert, $timeout, $location, $rootScope, $translate){
	        	
	        	       	
	        	$scope.message = function  () {
	        		$('.mbadge').hide();
	        		$location.path('/dashboard/mail/inbox');
	        		return false;
	        	}

	        	$scope.showMenu = function(){

			        $('#app-container').toggleClass('push-right');

	        	}

	        	$scope.$watch('value', function() {
	        		
					if ($scope.value == true) {
	        			$('body').addClass('switched');  
		        		$timeout(function(){
					        $('#calendar').fullCalendar('render');
					        $('#calendar').fullCalendar('rerenderEvents');			    
					    }, 200);
					    $rootScope.$broadcast('resize');
					}   
					else if($scope.value == false){
						$('body').removeClass('switched'); 	
					    $timeout(function(){
					        $('#calendar').fullCalendar('render');
					        $('#calendar').fullCalendar('rerenderEvents');			    
					    }, 200);
	        			$rootScope.$broadcast('resize');
					}

	        		localStorage.setItem("switched", JSON.stringify($scope.value));

	        	});

	        	$scope.changeLanguage = (function (l) {
					$translate.use(l);			
				});
	        	
	        	$scope.value = JSON.parse(localStorage.getItem("switched"));

	        	
	        	$scope.changeTheme = function(setTheme){

					$('<link>')
					  .appendTo('head')
					  .attr({type : 'text/css', rel : 'stylesheet'})
					  .attr('href', 'styles/app-'+setTheme+'.css');


				}
				$scope.toggleAlert = function  () {
					SweetAlert.swal({
				    title: "Are you sure?",
				    text: "All your notifications will be marked as read.",
				    type: "warning",
				    showCancelButton: true,
				    confirmButtonColor: "#F44336",
				    confirmButtonText: "Yes, do it.",
				    cancelButtonText: "No, I'll read them.",
				    closeOnConfirm: false,
				    closeOnCancel: false 
				}, 
					function(isConfirm){ 
					   if (isConfirm) {
					   		$('.abadge').hide();
					      SweetAlert.swal({
					      	title: "Done!", 
					      	text: "All your notifications have been marked read.", 
					      	type: "success",
					      	confirmButtonColor: "#64DD17"
					      	});
					   } else {
					      SweetAlert.swal({
					      	title: "Cancelled", 
					      	text: "notifications not marked read.", 
					        type: "error",
					      	confirmButtonColor: "#33C9DC"
					      });
					   }
					});
				}
	        }
    	}
	});