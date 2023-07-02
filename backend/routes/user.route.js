const userRouter = require("express").Router();
const User = require('../models/user.model')


userRouter.post('/register', async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const user = await User.create({name, email, password})
        res.status(200).json({message: "user registered sucessfully", user:user})
    }
    catch(error){
        res.status(400).json({message: error})
    }
})
       

module.exports = userRouter;
