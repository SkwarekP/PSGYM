const loads = require("../../Models/Equipment/Loads")

exports.newLoad = async (req, res) => {
    const load = new loads({
        producent: req.body.producent,
        type: req.body.type,
        amount: req.body.amount,
        weight: req.body.weight,
        price: req.body.price,
        date: req.body.date
    });
    load
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

exports.getLoads = async (req, res) => {
    loads.find()
        .then(result => res.send(result))
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

exports.removeLoad = async (req, res) => {
    loads.deleteOne({_id: req.params.loadId})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

exports.editLoad = async (req, res) => {
    loads.findOneAndUpdate({_id: req.params.loadId}, req.body)
        .then(() => {
            loads.findOne({_id: req.params.loadId})
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