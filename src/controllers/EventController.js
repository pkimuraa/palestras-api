const Event = require ('../models/Event')
const EventType = require ('../models/EventType')
const User = require ('../models/User')
const axios = require('axios')

module.exports= {
  async index(req, res){
    const events = await Event.find();
    return res.json(events);
  },
  async create(req, res) {
    const { title, description, ocurring_date, eventTypeId, userId} = req.body;

    let user;
    let eventType;

    try {
      user = await User.findById(userId);
      eventType = await Event.findById(eventTypeId);
    } 
    catch (err) {
      return res.json({error: 'Could not create event'})
    }

    if (!user || !eventType) {
      return res.json({error: 'Could not create event'})
    }

    const event = await Event.create({
        title,
        description,
        ocurring_date,
        author: userId,
        type: eventTypeId
    });

    await event.save();

    user.events.push(event);
    user.points = user.points + eventType.points
    await user.save();


    return res.json({event})
  }
  
}
