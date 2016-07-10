'use strict';

/**
 * @ngdoc function
 * @name utoo.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of utoo
 */
angular.module('utoo').controller('calendarCtrl', function ($scope){
	var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
	$scope.events = [
	[
            {title: 'All Day Event',start: new Date(y, m, 1),backgroundColor: '#E91E63', borderColor: '#E91E63' },
            {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2),backgroundColor: '#FF5722', borderColor: '#FF5722'},
            {title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false,backgroundColor: '#03A9F4', borderColor: '#03A9F4'},
            {title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false,backgroundColor: '#7B1FA2', borderColor: '#7B1FA2'},
            {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false,backgroundColor: '#FFEB3B', borderColor: '#FFEB3B'}
        ]
    ];

});