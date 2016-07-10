angular.module('utoo').directive('resizeLayout', function($rootScope, Layout) {
    return {
        restrict: 'A',
        scope: {
            switchvalue: '@'
        },
        link: function(scope, element, attr, ctrl) { 

            $rootScope.$watch('switch', function () {
                console.log($rootScope.switch, 'adsdasdasd');
                if($rootScope.switch == true) {
                    $('element').addClass('switched');
                    $rootScope.$broadcast('resize');
                } else {
                    $('element').removeClass('switched');
                    $rootScope.$broadcast('resize');
                }
                
            });

        }
    };

});