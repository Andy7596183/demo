const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mountRoutes = require("./routes");

const PORT = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

mountRoutes(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
