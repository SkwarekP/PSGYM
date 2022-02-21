const User = require("../Models/Users")
const jwt = require("jsonwebtoken")

exports.userLogin = async (req, res) => {
    User.findOne({email: req.body.email, password: req.body.password})
        .then(result => {
            const token = jwt.sign({email: result.email, password: req.body.password}, process.env.JWT_KEY)
            res.json({message: "You are login", token: token, user: result})
            console.log("You are login!")
        })
        .catch(err => {
            res.status(401).json({
                error: err,
                message: "User doesn't exist"
            })
        })
}

exports.getCurrentUser = async (req, res) => {
    User.find({email: req.user.email})
        .then(result => res.send(result))
        .catch(err => {
            res.status(401).json({
                error: err
            })
        })
}


