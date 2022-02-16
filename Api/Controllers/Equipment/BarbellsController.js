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
    Barbells.deleteOne({barbellId: req.params._id})
        .then(result => res.send(result))
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}