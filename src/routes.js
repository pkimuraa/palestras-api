const express = require('express');
const routes = express.Router();
const UserCotroller = require('./controllers/UserController');



routes.get('/users', UserCotroller.index);
routes.post('/users', UserCotroller.store); 

module.exports = routes;