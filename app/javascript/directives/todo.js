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
            deleteTodo: '&'
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

	        $scope.reset = function() {
	            $scope.todoForm.$setPristine();
	            $scope.todoForm.$setUntouched();
	        }

	        $scope.watch(function(scope) {
	        	return scope.todoForm.$submitted;
	        }, function(newValue, oldValue) {
	        	console.log(newValue);
	        });
		}
	}
});
