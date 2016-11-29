app.controller('todoController', ['$scope', 'Todo', 'MenuFilter', function($scope, Todo, MenuFilter) {
    $scope.todo = {};
    $scope.colors = ['primary', 'info', 'success', 'warning', 'danger', 'dark'];

    Todo.get()
        .success(function(data) {
            $scope.todos = data;
        })
        .error(function(data) {
            console.log('Error ' + data);
        });

    $scope.createTodo = function() {
        var newTodo = {
            text: 'New todo',
            color: $scope.colors[Math.floor((Math.random() * 3))]
        };

        Todo.create(newTodo)
            .success(function(data) {
                $scope.todos.push(data);
                $scope.selectTodo(data);
            })
            .error(function(data) {
                console.log('Error ' + data);
            });
    };

    $scope.updateTodo = function(todo) {
        Todo.update(todo)
            .success(function(data) {

            }).error(function(data) {
                console.log('Error ' + data);
            });
    };

    $scope.deleteTodo = function(id) {
        Todo.delete(id)
            .success(function(data) {
                var ids = $scope.todos.map(function(todo) {
                    return todo._id;
                });

                var index = ids.indexOf(id);
                $scope.todos.splice(index, 1);
            })
            .error(function(data) {
                console.log('Error ' + data);
            })
    };

    $scope.selectTodo = function(todo) {
        angular.forEach($scope.todos, function(todo) {
            todo.selected = false;
        });

        $scope.todo = todo;
        $scope.todo.selected = true;
    };

    $scope.computeFilter = function(todo) {
        var ifComplete = MenuFilter.getActiveMenu() === 'completed';

        if (MenuFilter.getActiveMenu() == 'all') {
            return true;
        }

        return ifComplete === todo.done;
    }

}]);
