const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  login: String, 
  github_username: String, 
  bio: String, 
  avatar_url: String,
  entry_date: String,
});

module.exports = mongoose.model('User', UserSchema);