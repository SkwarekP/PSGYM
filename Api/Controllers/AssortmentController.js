const Assortment = require("../Models/Assortment")

exports.getAssortment = async (req, res) => {
    Assortment.find()
        .then(result => res.send(result))
        .catch(err => {
            res.status(500).json({
                message: "Internal server error",
                error: err
            })
        })
}

exports.newPosition = async (req, res) => {
    const position = new Assortment({
        picture: `http://localhost:5000/${req.file.path}`,
        title: req.body.title,
        stan: req.body.stan,

    });
    position
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
exports.editStan = async (req, res) => {
    Assortment.findOneAndUpdate({_id: req.params.assortmentId}, {
        $set: {
            stan: req.body.stan
        }
    })
        .then(() => Assortment.findOne({_id: req.params.assortmentId})
            .then(result => res.send(result))
            .catch(err => res.status(404).json({message: "Not found", error: err}))
        )
        .catch(err => {
            res.status(500).json({
                message: "Internal server error",
                error: err
            })
        })
}

exports.removeItem = async (req, res) => {
        Assortment.deleteOne({_id: req.params.assortmentId})
            .then(result => res.send(result))
            .catch(err => {
                res.status(500).json({
                    error: err,
                    message: "No user"
                })
            })
}