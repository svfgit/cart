'use strict';

/**
* @ngdoc function
* @name utoo.controller:MainCtrl
* @description
* # MainCtrl
* Controller of utoo
*/
angular.module('utoo')
.controller('HomeCtrl', function($scope, $state, $timeout, $mdSidenav, $mdUtil, $log, $http, $location, $compile, uiCalendarConfig) {

    $scope.$state = $state;
    
    $scope.profile = function  () {
      $location.path('dashboard/profile');
    }

    $scope.invoice = function  () {
      $location.path('dashboard/invoice');
    }

    $scope.eventSources = [];


    $scope.render = function () {
       $timeout(function(){
         $('#calendar').fullCalendar('render');
          $('#calendar').fullCalendar('rerenderEvents');
    
       }, 1600);
   };
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    $scope.eventSources = [
        [
            {title: 'All Day Event',start: new Date(y, m, 1),backgroundColor: '#E91E63', borderColor: '#E91E63' },
            {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2),backgroundColor: '#FF5722', borderColor: '#FF5722'},
            {title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false,backgroundColor: '#03A9F4', borderColor: '#03A9F4'},
            {title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false,backgroundColor: '#7B1FA2', borderColor: '#7B1FA2'},
            {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false,backgroundColor: '#FFEB3B', borderColor: '#FFEB3B'}
        ]
    ];





    $scope.expression = false;


     $timeout(function () {

        $scope.expression = true;

         $scope.myData = [
            {
                "firstName": "Cox",
                "lastName": "Carney",
                "company": "Enormo",
                "status": "Employed"
            },
            {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "status": "Unemployed"
            },
            {
                "firstName": "Stevie",
                "lastName": "Gerrard",
                "company": "LA Galaxy",
                "status": "Employed"
            },
            {
                "firstName": "Andrea",
                "lastName": "Pirlo",
                "company": "Juve",
                "status": "Employed"
            },
            {
                "firstName": "David",
                "lastName": "Villa",
                "company": "Barcelona",
                "status": "Unemployed"
            },
            {
                "firstName": "Raheem",
                "lastName": "Sterling",
                "company": "Liverpool",
                "status": "Employed"
            },
            {
                "firstName": "Iago",
                "lastName": "Aspas",
                "company": "Sevilla",
                "status": "Employed"
            },
            {
                "firstName": "Stevan",
                "lastName": "Jovetic",
                "company": "City",
                "status": "Unemployed"
            }
        ];

    }, 400);
    
    $timeout(function () {

        $scope.data = [[28, 48, 80, 36, 56, 47, 70, 92]];
        $scope.labels = ["1", "1", "1", "1", "1", "1", "1"];
        $scope.colors = [{ 
              fillColor: '#3F51B5',
              strokeColor: '#3F51B5',
              pointColor: '#3F51B5',
              pointStrokeColor: '#fff',
              pointHighlightFill: '#fff',
              pointHighlightStroke: 'rgba(151,187,205,0.8)'
        }];
        $scope.options = {
            animation: true,
            showScale: false,
            showTooltips: false,
            maintainAspectRatio: true,
            pointDot: false,
            datasetStrokeWidth: 0.2
        };

    }, 100);

   var view = localStorage.getItem("switched");
    // alert(view);

    $scope.togglePercent = function  () {
           
        $scope.percent = Math.floor(Math.random()*(100-1+1)+1);       
    },



     $scope.percent = Math.floor(Math.random()*(100-1+1)+1);
        $scope.options = {
            animate:{
                duration:1200,
                enabled:true
            },
            easing: 'easeOutBounce', 
            barColor: '#FAC9D9',
            trackColor: '#ED4B82',
            scaleColor: '#F1F1F1',
            lineWidth: 7,
            size: '130',
            lineCap:'circle'
        };

});




