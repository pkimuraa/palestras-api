const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  ocurring_date: String,
  type: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EventType'
  },
  participants : [
    {type: mongoose.Schema.Types.ObjectId,ref:'User'}
  ]
});

module.exports = mongoose.model('Event', EventSchema);