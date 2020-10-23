const express = require("express");
const router = express.Router();

const Tomato = require("../models/tomato");
const monthNames = [
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
today = mm + "-" + dd + "-" + yyyy;

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    await Tomato.create({
      name: "half-tomato",
      month: currentMonth,
      date: today,
    });

    res.redirect("/");
  } catch (e) {
    next(e);
  }
});

module.exports = router;
