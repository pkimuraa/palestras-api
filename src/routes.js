const express = require('express');
const routes = express.Router();
const UserCotroller = require('./controllers/UserController');
const EventCotroller = require('./controllers/EventController');



routes.get('/users', UserCotroller.index);
routes.post('/users', UserCotroller.store); 
routes.post('/event/join', UserCotroller.eventsByUser); 


routes.get('/events', EventCotroller.index);
routes.post('/events', EventCotroller.create); 

module.exports = routes;