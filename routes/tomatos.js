const express = require('express');
const router = express.Router();

const Tomato = require('../models/tomato');
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const d = new Date();
let currentMonth = monthNames[d.getMonth()];

router.post('/', async (req, res, next) => {

  try {
    console.log(req.body);
    await Tomato.create({name: 'half-tomato', month: currentMonth, date: new Date().toISOString()});
    
    res.redirect('/');
  } catch (e) {
    next(e);
  }

});

module.exports = router;