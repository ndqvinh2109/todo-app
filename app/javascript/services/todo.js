angular.module('todoApp', [])
    .factory('Todo', ['$http', function TodoFactory($http) {
        return {
            get: function() {
                return $http.get('/api/todos');
            },

            create: function(todoData) {
                return $http.post('/api/todos', todoData);
            },

            delete: function(id) {
                return $http.delete('/api/todos/' + id);
            }
        };
    }]);
