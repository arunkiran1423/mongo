const express = require("express");
const bodyParser = require("body-parser");

const { ObjectID } = require("mongodb");
const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todos");
const { User } = require("./models/users");

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.post("/todos", (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });
  todo
    .save()
    .then(todo => res.json(todo))
    .catch(err => res.status(400).json(err));
});

app.get("/todos", (req, res) => {
  Todo.find()
    .then(todos => res.send(todos))
    .catch(err => res.status(400).json({ msg: filure }));
});

app.get("/todos/:id", (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(400).send();
  }
  Todo.findById(id)

    .then(todo => res.send({ todo }))
    .catch(e => res.status(404).json({ text: "todo notfound" }));
});

app.listen(port, () => {
  console.log("server starteddd");
});
