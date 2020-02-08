const Event = require ('../models/Event')
const User = require ('../models/User')
const axios = require('axios')

module.exports= {
  async create(req, res) {
    const {title, points} = req.body

    const eventType = await EventType.create({
      title,
      points
    })
    return res.json({eventType})
  }
}

