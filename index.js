const mongoose = require("mongoose");
const express = require("express");
const cool = require("cool-ascii-faces");
const bodyParser = require("body-parser");
require('dotenv').config()
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
var sslRedirect = require('heroku-ssl-redirect');
const {
  Pool
} = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});


const uri =
process.env.MONGO_URI;
const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("debug", true);
/*const deleteButton = document.querySelector(".delete-btn");
event.addEventListener(deleteTomatos);
deleteButton.addEventListener('click', function(e){
  e.preventDefault();
  console.log('Congrats! You have reached the clickController!');
});

function deleteTomatos(e){
  if (e.target.className != "delete-btn") {
    return;
  } (async function() {

    try {
  
      const conn = await mongoose.connect(uri, opts);
  
      // Clean data for demo
      await Promise.all(
        Object.entries(conn.models).map(([k, m]) => m.deleteMany())
      );

  } catch (e) {
    console.error(e)
  }


})();




}*/
(async function () {
  try {
    const conn = await mongoose.connect(uri, opts);
    /* const monthNames = [
       "January",
       "February",
       "March",
       "April",
       "May",
       "June",
       "July",
       "August",
       "September",
       "October",
       "November",
       "December",
     ];
     const d = new Date();
     let currentMonth = monthNames[d.getMonth()];
     var today = new Date();
     var dd = today.getDate();

     var mm = today.getMonth() + 1;
     var yyyy = today.getFullYear();
     if (dd < 10) {
       dd = "0" + dd;
     }

     if (mm < 10) {
       mm = "0" + mm;
     }
     today = mm + "-" + dd + "-" + yyyy;*/
    // Clean data for demo
    /*
    await Promise.all(
      Object.entries(conn.models).map(([k, m]) => m.deleteMany())
    );*/
    /*
        await Tomato.insertMany([
          { name: "half-tomato", month: "October", date: today },
          { name: "half-tomato", month: "August", date: "08-20-2020" },
          { name: "half-tomato", month: "August", date: new Date().toISOString() },
          {
            name: "half-tomato",
            month: "September",
            date: new Date().toISOString(),
          },
          {
            name: "half-tomato",
            month: "November",
            date: new Date().toISOString(),
          },
        ]);
    */
    // Insert some starter sample
    /*
    await Client.insertMany([
      { name: 'One', time: '2:00' },
      { name: 'Two', time: '3:00' }
    ]);
*/
  } catch (e) {
    console.error(e);
  }
})();

const app = express()

  app.set("view engine", "ejs")
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use("/", rootRoutes)
  app .use("/tomatos", tomatoRoutes)
  //.use('/deleteAll', deleteRoutes)
  //.use('/updateclients', updateclientRoutes)
  app.use("/deleteAll", deleteTomatoRoutes)
  app.use(cors())
  app.use(express.json())
  app.use(express.static(path.join(__dirname, "public")))
  app.set("views", path.join(__dirname, "views"))
  app.use(sslRedirect())
  app.get("/", (req, res) => res.render("pages/index"))
  app.get("/archive", (req, res) => res.render("pages/archive"))
  app.get("/settings", (req, res) => res.render("pages/settings"))
  app.get("/cool", (req, res) => res.send(cool()))
  app.get("/times", (req, res) => res.send(showTimes()))
  app.get("/db", async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query("SELECT * FROM test_table");
      const results = {
        results: result ? result.rows : null
      };
      res.render("pages/db", results);
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  
 

  /* Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })*/
 

  app.listen(PORT, () => console.log(`Listening on ${PORT}`));

showTimes = () => {
  for (i = 0; i < times; i++) {
    result += i + " ";
  }
  return result;
};