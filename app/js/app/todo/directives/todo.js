app.directive('todoFilter', function(MenuFilter) {
    return {
        restrict: 'E',
        templateUrl: 'tpl/pages/todo/todo-filter.html',
        controller: function($scope) {

            $scope.setActiveFilter = function(activeFilter) {
                MenuFilter.setActiveMenu(activeFilter)
            };

            $scope.makeActiveFilter = function(activeFilter) {
                return activeFilter === MenuFilter.getActiveMenu();
            };
        }

    }
});
