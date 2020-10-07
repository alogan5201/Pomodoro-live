const { Schema } = mongoose = require('mongoose');

const tomatoSchema = new Schema({
  name: String,
  time: String
});

module.exports = mongoose.model('Tomato', tomatoSchema);