const jwt = require('jsonwebtoken');

module.exports = function authenticate(req, res, next) {
    const token = req.header("x-auth-token");
    if(!token) return res.status(401).json({ "message": "Access Denied" });

    try {
        const decodedPayload = jwt.verify(token, process.env.token)
        req.user = decodedPayload;
        next(); 
    } catch (error) {
        res.status(400).json({ "message": "Invalid token"});
    }
}