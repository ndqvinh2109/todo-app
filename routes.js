var Todo = require('./server/model/todo');

module.exports = function(app) {

    app.get('/api/todos', function(req, res) {
        Todo.find(function(err, todos) {
            if (err) {
                res.send(err);
            }
            res.json(todos);
        })
    });

    app.post('/api/todos', function(req, res) {
        Todo.create({
            text: req.body.text,
            done: false
        }, function(err, todo) {
            if (err) {
                res.send(err);
            }

            Todo.find(function(err, todos) {
                if (err) {
                    res.send(err);
                }
                res.json(todos);
            });

        });
    });

    app.delete('/api/todos/:todoId', function(req, res) {
        Todo.remove({
            _id: req.params.todoId
        }, function(err, todo) {
            if (err) {
                res.send(err);
            }

            Todo.find(function(err, todos) {
                if (err) {
                    res.send(err);
                }
                res.json(todos);
            });
        });
    });

    app.put('/api/todos/', function(req, res) {
       
        Todo.findByIdAndUpdate(req.body._id, { $set: req.body }, function(err, todo) {
            
            if (err) {
                res.send(err);
            }

            Todo.find(function(err, todos) {
                if (err) {
                    res.send(err);
                }
                res.json(todos);
            });

        });
    });

    app.get('*', function(req, res) {
        console.log(__dirname);
        res.sendFile(__dirname + '/app/index.html');
    });
};
