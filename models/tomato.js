const { Schema } = mongoose = require('mongoose');

const tomatoSchema = new Schema({
  name: String,
  month: String,
  date: String
});

module.exports = mongoose.model('Tomato', tomatoSchema);