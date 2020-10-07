const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Tomato = require('../models/tomato');
const uri = "mongodb+srv://logan:drdeath@cluster0.mudoo.mongodb.net/MyPomodoro?retryWrites=true&w=majority"
const opts = { useNewUrlParser: true };

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);
router.post('/', async (req, res, next) => {

  try {

    const conn = await mongoose.connect(uri, opts);
   await Promise.all(
    Object.entries(conn.models).map(([k, m]) => m.deleteMany())
  );
   
    
    res.redirect('/');

  } catch (e) {
    next(e);
  }

});

module.exports = router;