const { Router } = require("express");
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");
const userRouter = Router();
const { userMiddleware } = require("../middleware/user");

userRouter.post("/signup", async function (req, res) {
  try {
    const { email, password, firstName, lastName } = req.body;

    // Check if the email already exists in the database
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      console.log("user already exists")
      return res
        .status(400)
        .json({ message: "User already exists. Please log in." });
  
    }

    // Create a new user
    // console.log("Before creating user...");
    await userModel.create({
      email,
      password, // Consider hashing this
      firstName,
      lastName,
    });
    console.log("User created successfully!");

    res.status(201).json({ message: "User signed up successfully" });

  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Internal Server Error" });  // ✅ Send a response in case of error
  }
});


userRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;
  // console.log("Request data recived", email, password);

  //unhash password
  const user = await userModel.findOne({
    email: email,
    password: password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_USER_PASSWORD
    );

    // do cookie logic
    res.cookie("token", token, { httpOnly: true, secure: true });

    res.json({
      email: email,
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
});

userRouter.get("/purchases", userMiddleware, async function (req, res) {
  try {
    // console.log("user id from middleware:", req.userId);

    if (!req.userId) {
      return res.status(403).json({ message: "user id missing from request" });
    }

    // let currentUser = users.find(user => user.id === req.userId);
    const currentUser = await userModel.findById(req.userId);
    // for (let i = 0; i < users.length; i++) {
    //   if (users[i].email == req.email) {
    //     currentUser = users[i];
    //   }
    // }

    if (!currentUser) {
      // console.log("user not found in db")
      return res.status(404).json({ message: "user not found" });
    }

    res.json({
      email: currentUser.email,
      password: currentUser.password,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      message: `Welcome ${currentUser.firstName}`,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = {
  userRouter: userRouter,
};
