require('dotenv').config()
const cors = require("cors")
const express = require('express');
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: "GET,POST,PUT,DELETE",
        allowedHeaders: "Content-Type,Authorization",
        credentials: true
    })
)
app.use((req, res, next) => {
    res.setHeader(
      "Content-Security-Policy",
      "script-src 'self' http://localhost:5173; object-src 'none';"
    );
    next();
  });
  



const { userRouter } = require('./routes/user')
const { courseRouter } = require('./routes/course')
const { adminRouter } = require('./routes/admin')

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