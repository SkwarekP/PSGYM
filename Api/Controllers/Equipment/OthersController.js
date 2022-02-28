const Others = require("../../Models/Equipment/Others")

exports.getOthers = async (req, res) => {
    Others.find()
        .then(result => res.send(result))
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

exports.newOther = async (req, res) => {
    const other = new Others({
        producent: req.body.producent,
        name: req.body.name,
        destination: req.body.destination,
        amount: req.body.amount,
        price: req.body.price,
        date: req.body.date
    });
    other
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}

exports.removeOther = async (req, res) => {
    Others.deleteOne({otherId: req.params._id})
        .then(result => res.send(result))
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}


exports.editOther = async (req, res) => {
    Others.findOneAndUpdate({_id: req.params.otherId}, req.body)
        .then(() => {
            Others.findOne({_id: req.params.otherId})
                .then(result => {
                    res.send(result)
                })
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "Internal server error"
            })
        })
}