const todos = require("./todos.routes");
const auth = require("./auth.routes");

module.exports = app => {
  app.use("/api/todos", todos);
  app.use("/auth", auth);
};
