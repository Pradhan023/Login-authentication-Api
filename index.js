const express = require("express")

const Port = 4900;

const server = express();

const cors = require("cors")

server.use(cors({
    origin:"*"
}))

server.use(express.json())  // excess to body parser in express

const Routers = require("./Routes")

server.use("/api",Routers)


server.listen(Port,()=>
{
    try{
        console.log("Server is live on 4900");
    }
    catch(err){
        console.log("Error"+err);
    }
})