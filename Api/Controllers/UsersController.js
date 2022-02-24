const Users = require("../Models/Users")

exports.getUsers = async (req, res) => {
    Users.find()
        .then(result => res.send(result))
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

exports.newUser = async (req, res) => {
    console.log(req.file);
    const user = new Users({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        number_tel: req.body.number_tel,
        password: req.body.password,
        isAdmin: req.body.isAdmin,
        picture: req.body.picture,
        createdAt: req.body.createdAt
    });
    user
        .save()
        .then(result => {
            console.log(result)
            res.status(201).json(result);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
}

exports.getSingleUser = async (req, res) => {
    Users.findOne({_id: req.params.userId})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

exports.removeUser = async (req, res) => {
    Users.deleteOne({_id: req.params.userId})
        .then(result => res.send(result))
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "No user"
            })
        })
}

exports.changeProfilePicture = async (req, res) => {
    Users.findOneAndUpdate({_id: req.params.currentUserId} , {
        $set: {
            picture: `http://localhost:5000/${req.file.path}`
        }
    })
        .then(() => Users.findOne({_id: req.params.currentUserId})
            .then((result) => res.json({picture: `${result.picture}`}))
        )
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}




