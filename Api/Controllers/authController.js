const User = require("../Models/Users")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

exports.userLogin = async (req, res) => {
    var user = {}
    User.findOne({email: req.body.email})
        .then(result => {
            user = result
            return bcrypt.compare(req.body.password, result.password)
        })
        .then(result => {
            console.log(result)
            if (result) {
                console.log("You are logged in!")
                const token = jwt.sign({email: user.email, password: req.body.password}, process.env.JWT_KEY)
                res.json({message: "You are login", token: token, user: user})
            } else {
                return res.status(401).json({
                    message: "Password not matched!"
                })
            }
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
    var user = {}
    const salt = await bcrypt.genSalt();
    var newPassword = await bcrypt.hash(req.body.new_password, salt)
    User.findOne({_id: req.params.userId})
        .then(result => {
            user = result
            return bcrypt.compare(req.body.old_password, result.password)
        })
        .then(result => {
            console.log(result)
            if (result) {
                User.findOneAndUpdate({_id: req.params.userId}, {
                    $set: {
                        password: newPassword
                    }
                })
                    .then(result => res.json({result: result, message: "Pomyslnie zmieniono haslo"}))
            } else {
                res.status(401).json({message: "Niepoprawne hasło uzytkownika"})
            }
        })
        .catch(err => {
            res.status(404).json({
                error: err,
                message: "User doesn't exist"
            })
        })
}
exports.changeEmail = async (req, res) => {
    User.findOne({_id: req.params.userId})
        .then(result => {
            return bcrypt.compare(req.body.password, result.password)
        })
        .then(result => {
            console.log(result)
            if (result) {
                User.findOneAndUpdate({_id: req.params.userId}, {
                    $set: {
                        email: req.body.new_email
                    }
                })
                    .then(result => res.json({result: result, message: "Pomyslnie zmieniono adres e-mail"}))
            } else {
                res.status(401).json({message: "Niepoprawne hasło uzytkownika"})
            }
        })
        .catch(err => {
            res.status(404).json({
                error: err,
                message: "User doesn't exist"
            })
        })
}


