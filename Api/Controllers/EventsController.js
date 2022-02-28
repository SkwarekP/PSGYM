const Event = require("../Models/Events")

exports.newEvent = async (req, res) => {
    const event = new Event({
        title: req.body.title,
        start: req.body.start,
        end: req.body.end,
        timeStart: req.body.timeStart,
        timeEndd: req.body.timeEndd,
        worker: req.body.worker,
        place: req.body.place,
        organizer: req.body.organizer
    })
    event
        .save()
        .then(result => {
            console.log(result)
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "Internal server error"
            })
        })
}

exports.getEvents = async (req, res) => {
    Event.find()
        .then(result => res.send(result))
        .catch(err => {
            res.status(400).json({
                error: err,
                message: "no events"
            })
        })
}

exports.editEvent = async (req, res) => {
    Event.findOneAndUpdate({_id: req.params.eventId}, req.body)
        .then(() => {
            Event.findOne({_id: req.params.eventId})
                .then(result => res.send(result))
        })
        .catch(err => {
            res.status(500).json({
                message: "internal server error",
                error: err,
            })
        })
}

exports.getSingleEvent = async (req, res) => {
    Event.findOne({_id: req.params.eventId})
        .then(result => res.send(result))
        .catch(err => {
            res.status(404).json({
                message: "Not found",
                error: err
            })
        })
}

exports.removeEvent = async (req, res) => {
    Event.deleteOne({_id: req.params.eventId})
        .then(result => res.send(result))
        .catch(err => {
            res.status(404).json({
                message: "Not found",
                error: err
            })
        })
}