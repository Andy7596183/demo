// const express = require("express");
// const router = express.Router();
const Router = require("express-promise-router");
const jwt = require("jsonwebtoken");
const db = require("../connection");
const verifyToken = require("../middlewares/authorize");

const router = new Router();

router.get("/", verifyToken, async (req, res, next) => {
  try {
    try {
      // verify token
      const { user } = jwt.verify(req.token, "secretkey");
      const { rows } = await db.query(
        "SELECT todos.id, todos.user_id, todos.title, todos.completed FROM app_users LEFT JOIN todos ON app_users.id = todos.user_id WHERE app_users.user_name=$1",
        [user.user_name]
      );
      res.json(rows);
      // res.json({ msg: "verified", authData,  });
    } catch (err) {
      console.log(err);
      res.sendStatus(403);
    }
  } catch (err) {
    console.error(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { user_id, title } = req.body;

    const { rows } = await db.query(
      "INSERT INTO todos(user_id, title) VALUES($1, $2) RETURNING *",
      [user_id, title]
    );
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { title, completed } = req.body;
    const { rows } = await db.query(
      "UPDATE todos SET title=$2, completed=$3 WHERE id=$1 RETURNING *",
      [req.params.id, title, completed]
    );
    res.json(rows[0]);
  } catch (err) {
    console.error(err, err.stack);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    console.log(typeof parseInt(req.params.id));
    if (Number.isInteger(parseInt(req.params.id))) {
      const { rows } = await db.query(
        "DELETE FROM todos WHERE id=$1 RETURNING id",
        [req.params.id]
      );
      res.json(rows);
    } else {
      next();
    }
  } catch (err) {
    console.error(err);
  }
});

router.delete("/completed", async (req, res, next) => {
  try {
    const { rows } = await db.query(
      "DELETE FROM todos WHERE completed=$1 RETURNING id",
      [true]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
