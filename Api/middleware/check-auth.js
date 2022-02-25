const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
    try {
        const token = req.headers["authorization"]
        if (!token) return res.sendStatus(401)
        await jwt.verify(token, process.env.JWT_KEY, (err, user) => {
            if (err) return res.sendStatus(403).json({message: "Unauthorized"})
            req.user = user
            next()
        });
    } catch (error) {
        return res.status(401).json({
            message: "Auth failed"
        })
    }
}