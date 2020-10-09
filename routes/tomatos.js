const express = require('express');
const router = express.Router();

const Tomato = require('../models/tomato');

router.post('/', async (req, res, next) => {

  try {
    console.log(req.body);
    await Tomato.create({name: 'half-tomato', month: 'October'});
    
    res.redirect('/');
  } catch (e) {
    next(e);
  }

});

module.exports = router;