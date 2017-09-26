app.controller('mainCtrl', ['$scope', 'userNames',
    function ($scope, userNames) {

        $scope.filter = '';

        $scope.onFilterChange = function () {
            updateNames();
        };

        function updateNames() {
            console.log('Updating!');
            $scope.names = userNames.find($scope.filter);
        }

        updateNames();
    }]);
