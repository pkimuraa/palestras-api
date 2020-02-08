const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String, 
  login: String, 
  github_username: String, 
  bio: String, 
  avatar_url: String,
  entry_date: String,
  points:{
    type: Number,
    default: 0
  },
  events : [
    {type: mongoose.Schema.Types.ObjectId,ref:'Event'}
  ]
});

module.exports = mongoose.model('User', UserSchema);