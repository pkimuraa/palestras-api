const Task = require ('../models/Task')
const User = require ('../models/User')
const axios = require('axios')

module.exports= {
  async index(req, res){
    const tasks = await Task.find();
    return res.json(tasks);
  },
  async create(req, res) {
    const { title, description, ocurring_date, points, userId} = req.body;

    let user;

    try {
      user = await User.findById(userId);
    } 
    catch (err) {
      return res.json({error: 'Could not find user'})
    }

    if (!user) {
      return res.json({error: 'Could not find user'})
    }

    const task = await Task.create({
        title,
        description,
        ocurring_date,
        points,
        author: userId
    });
    await task.save();

    user.tasks.push(task);
    await user.save();


    return res.json({task})
  }
  
}
