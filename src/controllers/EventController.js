const Event = require("../models/Event");
const EventType = require("../models/EventType");
const User = require("../models/User");
const axios = require("axios");

module.exports = {
  async index(req, res) {
    const events = await Event.find();
    return res.json(events.reverse());
  },
  async create(req, res) {
    const { title, description, ocurring_date, eventTypeId, userId } = req.body;
    console.log({ title, description, ocurring_date, eventTypeId, userId });

    let user;
    let eventType;

    try {
      user = await User.findById(userId);
      eventType = await EventType.findById(eventTypeId);
    } catch (err) {
      return res.json({ error: "Could not create event" });
    }

    if (!user || !eventType) {
      return res.json({ error: "Could not create event" });
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
    user.points = user.points + eventType.points;
    await user.save();

    return res.json({ event });
  },

  async show(req, res) {
    const id = req.params.id;
    const event = await Event.findById(id).populate("author");
    return res.json(event);
  }
};
