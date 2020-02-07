const axios = require('axios')
const User = require('../models/User');

module.exports= {
  async index(req, res){
    const users = await User.find();
    return res.json(users);
  },

  async store(req, res){
    const {name, github_username, entry_date} = req.body;

    const user = await User.findOne({github_username});

    if(!user) {
      const apiRes = await axios.get(`https://api.github.com/users/${github_username}`);
      const {login, avatar_url, bio} = apiRes.data;
      const user = await User.create({
        name,
        entry_date,
        login,
        github_username,
        avatar_url,
        bio,
      })
    return res.json({user});
    }
  
  },

  async tasksByUser(req, res){
    const { id } = req.params;
    const user = await User.findById(id).populate('tasks');
    res.send(user.tasks);
  },

}
