const { Router } = require('express');
const adminRouter = Router();
const { adminModel, courseModel } = require('../db');
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config")
const { adminMiddleware } = require("../middleware/admin");
const admin = require('../middleware/admin');

adminRouter.post("/signup", async function (req, res) {
    const { email, password, firstName, lastName } = req.body; // add zod
    // hash the password

    // put in try catch
    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message: "Admin Signed up successful"
    })
})

adminRouter.post("/signin", async function (req, res) {
    const { email, password } = req.body;

    //unhash password
    const admin = await adminModel.findOne({
        email: email,
        password: password
    });

    if (admin) {
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD);

        // do cookie logic

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
})

adminRouter.post("/course", adminMiddleware, async function (req, res) {
    const adminId = req.userId;
    const { title, description, imageUrl, price, creatorId } = req.body;

    // create web saas in 6hr use image upload logic
    const course = await courseModel.create({
        title,
        description,
        imageUrl,
        price,
        creatorId
    })

    res.json({
        message: "Course created",
        courseId: course._id
    })
})

adminRouter.put("/course", adminMiddleware, async function (req, res) {
    const adminId = req.userId;
    const { title, description, imageUrl, price, courseId } = req.body;
    const creatorId = req.creatorId

    // create web saas in 6hr use image upload logic
    const course = await courseModel.updateOne({
        _id: courseId,
        creatorId: adminId  // to check if real admin is updating
    },
        {
            title,
            description,
            imageUrl,
            price,
        })

    if (creatorId == adminId) {
        res.json({
            message: "Course updated",
            courseId: course._id
        })
    } else {
        res.json({
            message: "You've no authority to change"
        })
    }
})

adminRouter.get("/course/bulk", async function (req, res) {
    const adminId = req.userId;

    const courses = await courseModel.findOne({
        creatorId: adminId
    })

    res.json({
        message: "all course created by admin",
        courses
    })
})

module.exports = {
    adminRouter: adminRouter
}