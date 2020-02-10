const express = require("express");
const routes = express.Router();
const UserCotroller = require("./controllers/UserController");
const EventCotroller = require("./controllers/EventController");
const EventTypeCotroller = require("./controllers/EventTypeController");

routes.get("/users", UserCotroller.index);
routes.post("/users", UserCotroller.store);
routes.post("/event/join", UserCotroller.signUserInEvent);

routes.get("/events/:id", EventCotroller.show);
routes.get("/events", EventCotroller.index);
routes.post("/events", EventCotroller.create);
routes.get("/event/type", EventTypeCotroller.show);
routes.post("/event/type", EventTypeCotroller.create);

module.exports = routes;
