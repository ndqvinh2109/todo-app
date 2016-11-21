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
