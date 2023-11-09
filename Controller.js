const array = [];

const bcrypt = require("bcrypt")

const jwt=require("jsonwebtoken") // import jwt
const secretKey = "Anish123"

const RegisterController = (req,res)=>{
    const Regsdata = req.body;
    console.log(Regsdata);
    const details = array.find(item=>{
        if(item.email === Regsdata.email)
        {
            return item;
        }
    });
    if(details)
    {
        return res.send({msg:'User is already registered'})
    }

    const hashpassword = bcrypt.hashSync(Regsdata.password,10) //genrate some random string and symbol and add password , string+symol+password
    
    const TempObj = {
        firstname:Regsdata.firstname,
        lastname:Regsdata.lastname,
        email:Regsdata.email,
        password : hashpassword
    }
    array.push(TempObj)
    const token = jwt.sign({username:Regsdata.email},secretKey)
     return res.send({msg:"User is registered",array,token:token})
    
}

const LoginController = (req,res)=>{
    const Logdata =  req.body; // body parser req the data from body and saving in variable

    const Logdetails = array.find((item)=>{
        
        if(item.email === Logdata.email)
        {
            return item;
        }
    })

    
        if(Logdetails){
            const comparehash = bcrypt.compareSync(Logdata.password,Logdetails.password)  // compare the encrypt password with plane password and giving the result in boolean value true/false

            if(comparehash)
            {
                const token = jwt.sign({username:Logdata.email},secretKey,{expiresIn:"7d"})
                return res.send({msg:"User is Login Successfully",token:token})
            }
            else{
                return res.send({msg:"Check Your Password"})
            }
        }
        else {
            return res.send({msg:"check Your Email"})
        }
}

module.exports = {RegisterController,LoginController}