const User = require("../Models/Users")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

exports.userLogin = async (req, res) => {
    User.findOne({email: req.body.email})
        .then(result => {
            const validPassword = bcrypt.compare(req.body.password, result.password)
            if (!validPassword) res.send("wrong password")
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
exports.changePassword = async (req, res) => {
    User.findOne({id: req.params.userId})
        .then(result => {
            const validPassword = bcrypt.compare(req.body.old_password, result.password)
            if (!validPassword) {
                res.status(401).json({message: "Niepoprawne hasło uzytkownika"})
            } else {
                User.findOneAndUpdate({id: req.params.userId}, {
                    $set: {
                        password: req.body.new_password
                    }
                })
                    .then(result => res.send(result))
            }
        })
        .catch(err => {
            res.status(401).json({
                error: err,
                message: "User doesn't exist"
            })
        })
}


