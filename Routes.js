const Routers = require("express").Router();

const {auth} = require("./Middleware/Authentication")

const {RegisterController,LoginController} = require("./Controller")

Routers.post("/register",RegisterController);

Routers.post("/login",LoginController);

Routers.get("/",auth,(req,res)=>{
    res.send("WELCOME TO HOME PAGE")
})

module.exports = Routers