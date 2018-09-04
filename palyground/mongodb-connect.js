const Mongoclient = require("mongodb").MongoClient;

Mongoclient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log(err, "unableto connect ");
    }
    console.log("connected to server");

    db.close();
  }
);
