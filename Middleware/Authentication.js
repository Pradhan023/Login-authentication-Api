const jwt = require("jsonwebtoken")
const secretKey = "Anish123"

const auth = (req,res,next)=>{
    const BearerToken = req.headers["authorization"];  // this will give us the jwt token of user registration which will further go for check in middleware.                
    if(BearerToken){
        const token =BearerToken.split(" ")[1]; // split the bearer token
        const validate =jwt.verify(token,secretKey);  // it will give us username and iat (issused at time )

        if(validate){
            next();
        }
        return res.send({msg:"User is not Authorized"})
    }
    return res.send({msg:"User are not Allowed"});
}

module.exports = {auth}