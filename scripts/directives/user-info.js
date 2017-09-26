'use strict';

app.directive('userInfo', [function () {
    return {
        restrict: 'E',
        templateUrl: './views/user-info.html',
        scope: {
            name: '=',
            email: '='
        }
    }
}]);
