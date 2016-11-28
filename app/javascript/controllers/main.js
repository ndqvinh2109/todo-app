angular.module('todoController', [])
    .controller('mainController', ['$scope', 'Todo', 'MenuFilter', function($scope, Todo, MenuFilter) {
        $scope.todo = {};
        $scope.colors = ['primary', 'info', 'success', 'warning', 'danger', 'dark'];

        console.log(MenuFilter.get());

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
            var ifComplete = $scope.activeFilter === 'completed';

            if ($scope.activeFilter == 'all') {
                return true;
            }

            return ifComplete === todo.done;
        }
        $scope.testValue = "Vinh";
        $scope.makeTestValue = function(testValue) {
            $scope.testValue = testValue;
        }

    }]);
