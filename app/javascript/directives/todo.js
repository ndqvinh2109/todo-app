var todoDirective = angular.module('todoDirective', []);

todoDirective.directive('todoItem', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/pages/todo-item.html',
        scope: {
            todo: '=',
            deleteTodo: '&',
            updateTodo: '&'
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
            searchText: '='
        },
        controller: 'mainController'
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
            }

	        $scope.reset = function() {
                $scope.formData = {};
	            $scope.todoForm.$setPristine();
	            $scope.todoForm.$setUntouched();
	        }
		}
	}
});
