
const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../database/db");
const {courseModel} = require("../database/db")
const jwt = require("jsonwebtoken");
const {amdimAuth} = require("../middlewar/admin")
const {JWT_admin_SECRET} = require("../config")




adminRouter.post("/signup", async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    await adminModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    })
    res.status(200).json({success:true,message:"sign up successfully"})
})
adminRouter.post("/signin", async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const response = await adminModel.findOne({
        email:email,
        password:password
    })
    if(response){
        const token = jwt.sign({
            id:response._id.toString()
        },JWT_admin_SECRET)
        res.json({token})
    }else{
        res.status(403).json({success:false,message:"invalid creds"})
    }
})
adminRouter.post("/course", amdimAuth, async function (req, res) {
    
    const userId = req.userId;

    await courseModel.create({
        title:title,
        description:description,
        price:price,
        imageUrl:imageUrl,
        creatorId:creatorId

    })
    res.json({
        message: "Course created",
        courseId: course._id
    })

    
    
})

adminRouter.put("/course", function (req, res) {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.get("/course/bulk", function (req, res) {
    res.json({
        message: "signup endpoint"
    })
})

// adminRouter.delete("/",(res,res)=>{
//     res.json({message:"deleted"})
// })
module.exports = {
    adminRouter: adminRouter
}