const userRouter = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config()

const secret = process.env.JWT_SECRET;

userRouter.get("/", async (req, res) => {
  try {
    const user = await User.find();
    console.log(user);
    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

userRouter.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (name && email && password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      res
        .status(200)
        .json({ message: "user registered sucessfully", user: newUser });
    } else {
      res.status(400).json({ message: "required fields missing" });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatching = await bcrypt.compare(password, user.password);

    if (!isPasswordMatching) {
      console.log("Invalid credentials");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, secret);

    res.status(201).json({ message: "User logged in successfully", token });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = userRouter;
