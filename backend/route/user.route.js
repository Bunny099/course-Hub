
const { Router } = require("express");
const {userModel} = require("../database/db")
const userRouter = Router();

const jwt = require("jsonwebtoken");
const {JWT_user_SECRET} = require("../config")
const {userAuth} = require("../middlewar/user")





userRouter.post("/signup",async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    await userModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    })
    res.status(200).json({success:true,message:"sign up successfully"})
})

userRouter.post("/signin", async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const response = await userModel.findOne({
        email:email,
        password:password
    })
    if(response){
        const token = jwt.sign({
            id:response._id.toString()
        },JWT_user_SECRET)
        res.json({token})
    }else{
        res.status(403).json({success:false,message:"invalid creds"})
    }
})
userRouter.get("/seeallpurchases", (req, res) => {
    res.json({ message: "sign up" })
})
userRouter.get("/seeallcourses",(req,res)=>{

})
userRouter.post('/purchasecourse',(req,res)=>{
    
})
module.exports = {
    userRouter: userRouter
}