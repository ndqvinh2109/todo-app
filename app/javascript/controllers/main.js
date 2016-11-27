angular.module('todoController', [])
    .controller('mainController', ['$scope', 'Todo', function($scope, Todo) {
        $scope.todo = {};
        $scope.colors = ['primary', 'info', 'success', 'warning', 'danger', 'dark'];
        $scope.activeFilter = 'all';

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


        $scope.setActiveFilter = function(activeFilter) {
            $scope.activeFilter = activeFilter;
            console.log($scope.activeFilter);
        };

        $scope.getActiveFilter = function(activeFilter) {
            return $scope.activeFilter;
        };

        $scope.makeActiveFilter = function(activeFilter) {
            return activeFilter === $scope.activeFilter;
        };

        $scope.computeFilter = function(todo) {
            var ifComplete = $scope.activeFilter === 'completed';

            if ($scope.activeFilter == 'all') {
                return true;
            }

            return ifComplete === todo.done;
        }

    }]);
