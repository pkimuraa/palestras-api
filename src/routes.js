const express = require('express');
const routes = express.Router();
const UserCotroller = require('./controllers/UserController');
const TaskCotroller = require('./controllers/TaskController');



routes.get('/users', UserCotroller.index);
routes.post('/users', UserCotroller.store); 
routes.post('/users/task/:id', UserCotroller.tasksByUser); 

routes.get('/tasks', TaskCotroller.index);
routes.post('/tasks', TaskCotroller.create); 

module.exports = routes;