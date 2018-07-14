// library imports
const express = require('express');
const bodyParser = require('body-parser');

// local file imports
const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

// express config
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});