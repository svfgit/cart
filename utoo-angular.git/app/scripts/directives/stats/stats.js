'use strict';

angular.module('utoo')
  .directive('stats',function(){
    return {
        templateUrl:'scripts/directives/stats/stats.html?v='+window.app_version,
        restrict: 'E',
        replace: true,
        scope: {
          'icon': '@',
          'header': '@',
          'number': '@',
          'comment': '@'
        }
      }
  });


