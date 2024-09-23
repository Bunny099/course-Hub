
const jwt = require("jsonwebtoken");
const {JWT_admin_SECRET} = require("../config")


function amdimAuth(req,res,next){
    const token = req.headers.authorization;
    const response = jwt.verify(token,JWT_admin_SECRET);
    if(response){
      req.userId = response.id;
        next()
    }else{
     res.status(403).json({success:false,message:"invalid cred from auth"})
    }
}

module.exports={
    amdimAuth:amdimAuth
}