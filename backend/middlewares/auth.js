

const getAuth = (req, res, next) => {
try {
    const token = req.headers.token
    if(token){
        console.log("token::", token);
    }
    next();
} catch (error) {
    res.status(401).json({error: "Unauthorized"})
}
}

module.exports = {getAuth}