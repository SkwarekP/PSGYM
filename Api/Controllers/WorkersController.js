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

exports.getWorkerByName = async (req, res) => {
    Workers.findOne({name: req.params.name})
        .then(result => res.send(result))
        .catch(err => {
            res.status(404).json({message: "Not found"})
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


exports.removeEvent = async (req, res) => {
    Workers.findOneAndUpdate({_id: req.params.workerId}, {
        $pull: {
            events: {title: req.body.title}
        }
    })
        .then(() => Workers.findOne({_id: req.params.workerId})
            .then(result => res.send(result)))
}
