
const express = require("express");
const mongoose = require("mongoose")

const { userRouter } = require("./route/user.route");
const { courseRouter } = require("./route/course.route");
const { adminRouter } = require("./route/admin.route")
const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter)

async function main(){
    await mongoose.connect("mongodb+srv://jayeshkhuman121:yBWr0BLnkAggoI2V@cluster0.wq2fc.mongodb.net/coursesell");
    app.listen(3000)
    console.log("Listening port 3000");
}
main()
