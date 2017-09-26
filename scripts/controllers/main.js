app.controller('mainCtrl', ['$scope', 'userNames',
    function ($scope, userNames) {

        var maxItems = 18;

        $scope.filter = '';
        $scope.showSearchPanel = true;

        $scope.onFilterChange = function () {
            updateNames();
        };

        $scope.onToggle = function () {
            $scope.showSearchPanel = !$scope.showSearchPanel;
        };

        $scope.menuStatus = {
            open: false
        };

        $scope.mailTo = [];

        $scope.getEmails = function () {
            return $scope.names.filter(function (item) {
                return item.checked;
            }).map(function (item) {
                return item.email;
            }).join(';');
        };

        function updateNames() {
            $scope.names = userNames.find($scope.filter, maxItems);
        }

        updateNames();
    }]);
