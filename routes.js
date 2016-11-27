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
            done: false,
            date: new Date(),
            color: req.body.color
        }, function(err, todo) {
            if (err) {
                res.send(err);
            }

            res.json(todo);
        });
    });

    app.delete('/api/todos/:todoId', function(req, res) {
        Todo.remove({
            _id: req.params.todoId
        }, function(err, todo) {
            if (err) {
                res.send(err);
            }

        });
    });

    app.put('/api/todos/', function(req, res) {

        Todo.findByIdAndUpdate(req.body._id, { $set: req.body }, function(err, todo) {

            if (err) {
                res.send(err);
            }

            res.json(todo);

        });
    });

    app.get('*', function(req, res) {
        console.log(__dirname);
        res.sendFile(__dirname + '/app/index.html');
    });
};
