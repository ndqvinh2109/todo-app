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

todoDirective.filter('computeFilter', function() {

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
        	console.log(scope.activeFilter);

        	scope.computeFilter = function(todo) {
        		var ifComplete = scope.activeFilter === 'completed';
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
        	scope.activeFilter = 'completed';

        	scope.setActiveFilter = function(activeFilter) {
        		scope.activeFilter = activeFilter;
        	};

            scope.makeActiveFilter = function(activeFilter) {
               return activeFilter === scope.activeFilter;              
            };

        }
    }
});
