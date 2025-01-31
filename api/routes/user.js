const { Router } = require('express');
const { userModel } = require("../db")
const jwt = require("jsonwebtoken");
const{ JWT_USER_PASSWORD } = require("../config")
const userRouter = Router();

userRouter.post("/signup", async function (req, res) {
    const { email, password, firstName, lastName } = req.body; // add zod
    // hash the password

    // put in try catch
    await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message: "User Signed up successful"
    })
})

userRouter.post("/signin", async function (req, res) {
    const { email, password } = req.body;

    //unhash password
    const user = await userModel.findOne({
        email: email,
        password: password
    });

    if (user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD);

        // do cookie logic

        res.json({
            token: token
        })
    } else{ 
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
})


userRouter.get("/purchases", function (req, res) {
    res.json({
        message: "all purchased courses"
    })
})

module.exports = {
    userRouter: userRouter
}