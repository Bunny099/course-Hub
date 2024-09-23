
const { Router } = require("express");
const { model } = require("mongoose");

const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {

})
courseRouter.get("/preview", (req, res) => {

})

module.exports = {
    courseRouter: courseRouter
}