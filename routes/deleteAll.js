const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Tomato = require("../models/tomato");
const uri =
process.env.MONGO_URI;
const opts = { useNewUrlParser: true };

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("debug", true);
router.post("/", async (req, res, next) => {
  try {
    const conn = await mongoose.connect(uri, opts);
    await Promise.all(
      Object.entries(conn.models).map(([k, m]) => m.deleteMany())
    );

    res.redirect("/settings");
  } catch (e) {
    next(e);
  }
});

module.exports = router;
