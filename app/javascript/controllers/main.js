angular.module('todoApp', [])
    .controller('todoController', ['$scope', 'Todo', function($scope, Todo) {
        $scope.formData = {};

        Todo.get()
            .success(function(data) {
                $scope.todos = data;
            })
            .error(function(data) {
                console.log('Error ' + data);
            });

        $scope.createTodo = function() {
            Todo.create($scope.formData)
                .success(function(data) {
                    $scope.formData = {};
                    $scope.todos = data;
                })
                .error(function(data) {
                    console.log('Error ' + data);
                });
        };

        $scope.deleteTodo = function(id) {
            Todo.delete(id)
                .success(function(data) {
                    $scope.todos = data;
                })
                .error(function(data) {
                    console.log('Error ' + data);
                })
        }


    }]);
