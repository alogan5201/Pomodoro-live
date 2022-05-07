const mongoose = require("mongoose");
const express = require("express");
const cool = require("cool-ascii-faces");
const bodyParser = require("body-parser");
require("dotenv").config();
const Tomato = require("./models/tomato");
const rootRoutes = require("./routes/root");
//const deleteRoutes = require('./routes/deleteAll');
const tomatoRoutes = require("./routes/tomatos");
//const updateclientRoutes = require('./routes/updateclients');
const deleteTomatoRoutes = require("./routes/deleteAll");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 3000;
let result = "";
const times = process.env.TIMES || 5;
const sslRedirect = require("heroku-ssl-redirect").default;
const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const uri = process.env.MONGO_URI;
const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("debug", true);

(async function () {
  try {
    const conn = await mongoose.connect(uri, opts);
  } catch (e) {
    console.error(e);
  }
})();

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use("/", rootRoutes);
app.use("/home", rootRoutes);
app.use("/tomatos", tomatoRoutes);
//.use('/deleteAll', deleteRoutes)
//.use('/updateclients', updateclientRoutes)
app.use("/deleteAll", deleteTomatoRoutes);
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.use(sslRedirect());
app.get("/", (req, res) => res.render("pages/index"));
app.get("/archive", (req, res) => res.render("pages/archive"));
app.get("/home", (req, res) => res.render("pages/home"));
app.get("/settings", (req, res) => res.render("pages/settings"));
app.get("/cool", (req, res) => res.send(cool()));
app.get("/times", (req, res) => res.send(showTimes()));
app.get("/db", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM test_table");
    const results = {
      results: result ? result.rows : null,
    };
    res.render("pages/db", results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

showTimes = () => {
  for (i = 0; i < times; i++) {
    result += i + " ";
  }
  return result;
};
