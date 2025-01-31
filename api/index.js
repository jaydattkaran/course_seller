require('dotenv').config()

const express = require('express');
const mongoose = require("mongoose");

const { userRouter } = require('./routes/user')
const { courseRouter } = require('./routes/course')
const { adminRouter } = require('./routes/admin')
const app = express();
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/course", courseRouter);

async function main(){
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to db")

    app.listen(3000);
    console.log("listening port 3000")
}
main()