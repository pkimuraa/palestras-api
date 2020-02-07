const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  ocurring_date: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

});

module.exports = mongoose.model('Task', TaskSchema);