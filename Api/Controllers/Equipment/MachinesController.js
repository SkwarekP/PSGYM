const Machines = require("../../Models/Equipment/Machines")

exports.newMachine = async (req, res) => {
    const machine = new Machines({
        serial_number: req.body.serial_number,
        name: req.body.name,
        producent: req.body.producent,
        price: req.body.price,
        date: req.body.date
    });
    machine
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
exports.getMachines = async (req, res) => {
    Machines.find()
        .then(data => {
            res.send(data)
        }).catch(err => {
        res.status(500).json({
            error: err
        })
    })
}

exports.removeMachine = async (req, res) => {
    Machines.deleteOne({machineId: req.params._id})
        .then(result => res.send(result))
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

exports.editMachine = async (req, res) => {
    Machines.findOneAndUpdate({_id: req.params.machineId}, req.body)
        .then(() => {
            Machines.findOne({_id: req.params.machineId})
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