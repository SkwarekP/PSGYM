const Workers = require("../Models/Workers")

exports.getWorkers = async (req, res) => {
    Workers.find()
        .then(result => res.send(result))
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

exports.newWorker = async (req, res) => {
    const worker = new Workers({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        number_tel: req.body.number_tel,
        function: req.body.function,
        events: req.body.events,
        picture: req.body.picture,
        createdAt: req.body.createdAt
    });
    worker
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

exports.removeWorker = async (req, res) => {
    Workers.deleteOne({_id: req.params.workerId})
        .then(result => res.send(result))
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "No user"
            })
        })
}

exports.editEventWorker = async (req, res) => {
    Workers.findOne({_id: req.params.workerId})
        .then(result => {
            result.events.push(req.body)
            result.save()
            return result
        })
        .then(result => res.send(result))
}