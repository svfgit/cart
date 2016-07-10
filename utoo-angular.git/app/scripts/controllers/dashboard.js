'use strict';

/**
* @ngdoc function
* @name utoo.controller:MainCtrl
* @description
* # MainCtrl
* Controller of utoo
*/
angular.module('utoo')
.controller('DashboardCtrl', function($scope, $state, $interval, $timeout, $mdSidenav, $mdUtil, $log, $http, $location, Layout) {

	$scope.toggleRight = buildToggler('right');
    function buildToggler(navID) {
        var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
            .toggle()
            .then(function () {
                $log.debug("toggle " + navID + " is done");
            });
        },250);
        return debounceFn;
    };
     $scope.close = function () {
        $mdSidenav('right').close()
        .then(function () {
            $log.debug("close RIGHT is done");
        });
    };
    $scope.switch = Layout.getSwitchValue();
    console.log($scope.switch, 'juhiuh');
});