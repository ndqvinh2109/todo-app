app.directive('navMenu', function(MenuFilter) {
    return {
        restrict: 'E',
        templateUrl: 'tpl/pages/todo/nav-menu.html',
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
