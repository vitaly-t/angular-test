app.controller('mainCtrl', ['$scope', 'userNames',
    function ($scope, userNames) {

        var maxItems = 18;

        $scope.filter = '';

        $scope.onFilterChange = function () {
            updateNames();
        };

        function updateNames() {
            $scope.names = userNames.find($scope.filter, maxItems);
        }

        updateNames();
    }]);
