const Router = require("express-promise-router");
const jwt = require("jsonwebtoken");
const db = require("../connection");
const router = new Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    // username and password is not empty
    if (username && password) {
      // get user
      const { rows } = await db.query(
        "SELECT user_name, password, email, phone FROM app_users WHERE user_name=$1",
        [username]
      );
      // if username exist
      if (rows[0]) {
        // username and password is correct
        if (rows[0].user_name === username && rows[0].password === password) {
          // create token
          const token = jwt.sign({ user: rows[0] }, "secretkey");
          res.json({ isLogin: true, token });
        }
        // username or password is wrong
        else {
          res.json({
            isLogin: false,
            msg: "username or password is incorrect"
          });
        }
      } // username doesn't exist
      else {
        res.json({ isLogin: false, msg: "username doesn't exist" });
      }
    } else {
      res.json({
        isLogin: false,
        msg: "username and password must not be empty"
      });
    }
  } catch (err) {
    console.error(err);
  }
});

router.post("/register", async (req, res) => {
  try {
    const { username, password, email, phone } = req.body;
    const { rows } = await db.query(
      "INSERT INTO app_users (user_name, password, email, phone) VALUES ($1, $2, $3, $4)",
      [username, password, email, phone]
    );
    console.log(rows);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.json({ isLogin: false });
});

module.exports = router;
