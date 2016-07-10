'use strict';

var app = angular.module('docs',['ngAnimate','ngAria','ngMaterial']);
app.controller('Ctrl', function ($scope, $mdToast, $mdDialog) {
 	$scope.todos = [
 	{text:'Meeting with Xian Lu.', done:false, id: 'option1'}, 
 	{text:'Exercise at 6:pm.', done:false, id: 'option3'},         
 	{text:'Avengers Age of Ultron.', done:false, id: 'option4'},         
 	{text: 'Sarah birthday', done:false, id: 'option5'}
 	];
  	function makeid()
 	{
 		var text = "";
 		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

 		for( var i=0; i < 5; i++ )
 			text += possible.charAt(Math.floor(Math.random() * possible.length));

 		return text;
 	}
 	$scope.addTodo = function () {
 		$scope.todos.push({text:$scope.formTodoText, done:false, id:makeid()});
 		$scope.formTodoText = '';
 	}
	$scope.color = {
    red: Math.floor(Math.random() * 255)
  }
  $scope.toastPosition = {
    bottom: false,
    top: true,
    left: false,
    right: true
  }
  $scope.getToastPosition = function() {
    return Object.keys($scope.toastPosition)
      .filter(function(pos) { return $scope.toastPosition[pos]; })
      .join(' ');
  }
   $scope.showActionToast = function() {
    var toast = $mdToast.simple()
          .content('Action Toast!')
          .action('OK')
          .highlightAction(false)
          .hideDelay(9000)
          .position($scope.getToastPosition());
    $mdToast.show(toast).then(function() {
      alert('You clicked \'OK\'.');
    });
  }
  $scope.alert = '';
  $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.body))
        .title('This is an alert title')
        .content('You can specify some description text in here. This is your alert body.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };

 });


app.directive('todolist',function(){
		return {
	    templateUrl:'assets/js/directive/to-do.html',
	    restrict: 'E',
	    replace: true,
    	controller: function($scope){

			setTimeout(function(){
    			$('.todo-list-wrap').perfectScrollbar();
			}, 100);

        }
	}
});