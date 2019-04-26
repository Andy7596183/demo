const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const mountRoutes = require("./routes");

const PORT = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24
    }
  })
);
app.use(cookieParser());

mountRoutes(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
