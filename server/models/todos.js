const mongoose = require("mongoose");

let Todo = mongoose.model("Todo", {
  text: {
    type: String,
    minlength: 2
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

module.exports = { Todo };
