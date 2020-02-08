const mongoose = require('mongoose');

const EventTypeSchema = new mongoose.Schema({
  title: String,
  points: String,

});

module.exports = mongoose.model('EventType', EventTypeSchema);