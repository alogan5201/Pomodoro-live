const express = require('express');
const router = express.Router();

const Tomato = require('../models/tomato');

router.get('/', async (req, res, next) => {

  try {

    let tomatos = await Tomato.find();
    console.log(tomatos);
    res.render('pages/index', { tomatos });

  } catch (e) {
    next(e);
  }

});

router.get('/archive', async (req, res, next) => {

  try {

    let tomatos = await Tomato.find({}).sort({month: 1});
    
    res.render('pages/archive', { tomatos });

  } catch (e) {
    next(e);
  }

});

module.exports = router;