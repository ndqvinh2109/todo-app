var todoDirective = angular.module('todoDirective', []);

todoDirective.directive('todoItem', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/pages/todo-item.html',
        scope: {
            todo: '=',
            deleteTodo: '&',
            updateTodo: '&'
        },
        controller: function($scope) {
            $scope.delete = function(id) {
                $scope.deleteTodo()(id);
            };

            $scope.update = function(todo) {
                $scope.updateTodo()(todo);
            };
        }
    };
});

todoDirective.directive('todoList', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/pages/todo-list.html',
        scope: {
            todos: '=',
            deleteTodo: '&',
            updateTodo: '&',
            searchText: '=',
            activeFilter: '='
        },
        controller: function($scope) {
            $scope.delete = function(id) {
                $scope.deleteTodo()(id);
            };

            $scope.update = function(todo) {
                $scope.updateTodo()(todo);
            };
        },
        link: function(scope, element, attrs) {

            scope.computeFilter = function(todo) {
                var ifComplete = scope.activeFilter === 'completed';

                if (scope.activeFilter == 'all') {
                    return true;
                }

                return ifComplete === todo.done;
            }
        }
    };
});

todoDirective.directive('todoInput', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/pages/todo-input.html',
        scope: {
            createTodo: '&'
        },
        controller: function($scope) {
            $scope.formData = {};
            $scope.saveTodo = function() {
                $scope.createTodo()($scope.formData);
                $scope.reset();
            };

            $scope.reset = function() {
                $scope.formData = {};
                $scope.todoForm.$setPristine();
                $scope.todoForm.$setUntouched();
            };
        }
    }
});

todoDirective.directive('todoFilterSelect', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/pages/todo-filter-select.html',

        link: function(scope, element, attrs) {
            scope.activeFilter = 'all';

            scope.setActiveFilter = function(activeFilter) {
                scope.activeFilter = activeFilter;
            };

            scope.makeActiveFilter = function(activeFilter) {
                return activeFilter === scope.activeFilter;
            };

        }
    }
});

todoDirective.directive('todoFilter', function() {
    return {
        restrict: 'E',
        templateUrl: 'tpl/todo-filter.html',
        scope: {
            active: '=',
            makeTestValue: '&'
        },
        controller: function($scope) {
            $scope.active = 'all';

            $scope.setTest = function(testValue) {
                $scope.makeTestValue()(testValue);
            };
            $scope.setActiveFilter = function(activeFilter) {
                $scope.active = activeFilter;
            };

            $scope.makeActiveFilter = function(activeFilter) {
                return activeFilter === $scope.active;
            };
        }

    }
});
