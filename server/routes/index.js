const todos = require("./todos.routes");

module.exports = app => {
  app.use("/api/todos", todos);
};
