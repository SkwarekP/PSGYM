const jwt = require("jsonwebtoken")

module.exports = async (req, res, next) => {
    try {
        const token = req.headers["authorization"]
        if (token === null) return res.sendStatus(401)
        await jwt.verify(token, process.env.JWT_KEY, (err, user) => {
            if (err) return res.sendStatus(403)
            req.user = user
            next()
        });
    } catch (error) {
        return res.status(401).json({
            message: "Auth failed"
        })
    }
}