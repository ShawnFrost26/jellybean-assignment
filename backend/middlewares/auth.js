const jwt  = require("jsonwebtoken")
const User = require('../models/user.model')
const dotenv = require('dotenv')
dotenv.config()

const secret = process.env.JWT_SECRET

const getAuth = async (req, res, next) => {
try {
    const token = req.headers.token
    console.log("token::", token);
    if(!token){
        return res.status(401).json({error: "unauthorized"})
    }
    const verifyToken = jwt.verify(token, secret)
    console.log("Decoded Token:", verifyToken);
    if(!verifyToken){
        return res.status(401).json({error: "unauthorized"})
    }
    const user = await User.findById(verifyToken.id);
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    req.userId = verifyToken.id
    req.user = user;
    next();
} catch (error) {
    res.status(401).json({error: "Unauthorized"})
}
}

module.exports = {getAuth}