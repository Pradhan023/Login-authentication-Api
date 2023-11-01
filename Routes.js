const Routers = require("express").Router();

const {RegisterController,LoginController} = require("./Controller")

Routers.post("/register",RegisterController);

Routers.post("/login",LoginController);

module.exports = Routers