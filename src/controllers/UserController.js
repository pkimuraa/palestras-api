const axios = require("axios");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Event = require("../models/Event");

module.exports = {
  async index(req, res) {
    const users = await User.find();
    return res.json(users).populate("events");
  },

  async findById(req, res) {
    const id = req.params.id;
    const users = await User.findById(id).populate("events");
    return res.json(users);
  },

  async store(req, res) {
    const { name, github_username, entry_date, password } = req.body;
    const user = await User.findOne({ github_username });
    if (!user) {
      const apiRes = await axios.get(
        `https://api.github.com/users/${github_username}`
      );
      const { login, avatar_url, bio } = apiRes.data;
      const user = await User.create({
        name,
        entry_date,
        password,
        login,
        github_username,
        avatar_url,
        bio
      });
      return res.json({ user });
    }
  },

  async signUserInEvent(req, res) {
    const { userId, eventId } = req.body;

    let event;
    let user;

    try {
      event = await Event.findById(eventId);
      user = await User.findById(userId);
    } catch (err) {
      console.log(event);
      return res.json({ error: "Could not find the event" });
    }

    if (!event || !user) {
      return res.json({ error: "Could not find the event" });
    }

    if (event.participants.includes(userId)) {
      return res.json({ error: "User already attending" });
    }

    event.participants.push(userId);
    await event.save();

    return res.json({ event });
  }
};
