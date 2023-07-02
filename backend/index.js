const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const userRouter = require('./routes/user.route')

dotenv.config()

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
.then(()=>console.log("connected to the MongoDB database"))
.catch(err=>console.log(err))

const app = express();
app.use(express.json());

app.use("/users", userRouter);



app.listen(PORT, ()=>{
    console.log("App is running on port:", PORT);
})