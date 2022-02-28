const Barbells = require("../../Models/Equipment/Barbells")

exports.getBarbells = async (req, res) => {
    Barbells.find()
        .then(result => res.send(result))
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

exports.newBarbell = async (req, res) => {
    const barbell = new Barbells({
        producent: req.body.producent,
        type: req.body.type,
        amount: req.body.amount,
        weight: req.body.weight,
        price: req.body.price,
        date: req.body.date
    });
    barbell
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

exports.removeBarbell = async (req, res) => {
    Barbells.deleteOne({_id: req.params.barbellId})
        .then(result => res.send(result))
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

exports.editBarbell = async (req, res) => {
    Barbells.findOneAndUpdate({_id: req.params.barbellId}, req.body)
        .then(() => {
            Barbells.findOne({_id: req.params.barbellId})
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