const userRouter = require("express").Router();
const User = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


userRouter.get('/', async (req, res) => {
    try{
        const user = await User.find();
        console.log(user)
        res.status(200).json({user})
    }
    catch(error){
        res.status(404).json({message: error})
    }
})

userRouter.post('/register', async (req, res) => {
    try{
        const {name, email, password} = req.body;
        if(name && email && password){
            const hashedPassword = await bcrypt.hash(password, 10)
            const newUser = await User.create({name, email, password: hashedPassword})
            res.status(200).json({message: "user registered sucessfully", user:newUser})
        }
        else{
            res.status(400).json({message: "required fields missing"})
        }
    }
    catch(error){
        res.status(400).json({message: error})
    }
})
       
userRouter.post('/login', async (req, res) => {
    try{
        const { email, password} = req.body;
        const user = await User.findOne({email, password});
        if(!user){
            res.status(404).json({message: "user not found"})
        }
        else{
            res.status(201).json({message: "user logged in sucessfully", user:user})
        }
    }
    catch(error){
        res.status(400).json({message: error})
    }
})


module.exports = userRouter;
