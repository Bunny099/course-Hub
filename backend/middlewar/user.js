
const jwt = require("jsonwebtoken");
const {JWT_user_SECRET} = require("../config")


function userAuth(req,res,next){
    const token = req.headers.authorization;
    const response = jwt.verify(token,JWT_user_SECRET);
    if(response){
      req.userId = response.id;
        next()
    }else{
     res.status(403).json({success:false,message:"invalid cred from auth"})
    }
 }

 module.exports={
    userAuth:userAuth,

 }