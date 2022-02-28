const dumbells = require("../../Models/Equipment/Dumbells")

exports.newDumbell = async (req, res) => {
    const dumbell = new dumbells({
        producent: req.body.producent,
        type: req.body.type,
        amount: req.body.amount,
        weight: req.body.weight,
        price: req.body.price,
        date: req.body.date
    });
    dumbell
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

exports.getDumbells = async (req, res) => {
    dumbells.find()
        .then(result => res.send(result))
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

exports.removeDumbell = async (req, res) => {
    dumbells.deleteOne({_id: req.params.dumbellId})
        .then(result => res.send(result))
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

exports.editDumbell = async (req, res) => {
    dumbells.findOneAndUpdate({_id: req.params.dumbellId}, req.body)
        .then(() => {
            dumbells.findOne({_id: req.params.dumbellId})
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
