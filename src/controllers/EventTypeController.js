const EventType = require("../models/EventType");

module.exports = {
  async create(req, res) {
    const { title, points } = req.body;

    const eventType = await EventType.create({
      title,
      points
    });
    return res.json({ eventType });
  },

  async show(req, res) {
    const types = await EventType.find();
    return res.json(types);
  }
};
