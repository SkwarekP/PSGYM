const clientsInfo = require("../Models/ClientsInfo")
const moment = require("moment")

exports.newClientsInfo = async (req, res) => {
    const clientInfo = new clientsInfo({
        fromKarnetDate: req.body.fromKarnetDate,
        toKarnetDate: req.body.toKarnetDate,
        whenIn: req.body.whenIn,
        whenOut: req.body.whenOut,
    })
    clientInfo
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

exports.getAllClientsInfo = async (req, res) => {
    clientsInfo.find()
        .then(result => res.send(result))
        .catch(err => {
            res.status(500).json({message: "Internal server error", error: err})
        })
}

exports.getSingleClientInfo = async (req, res) => {
    clientsInfo.findOne({_id: req.params.clientInfo})
        .then(result => res.send(result))
        .catch(err => {
            res.status(404).json({message: "Not found"})
        })
}

exports.editClientInfo = async (req, res) => {
    clientsInfo.findOneAndUpdate({_id: req.params.clientInfo}, req.body)
        .then(() => clientsInfo.findOne({_id: req.params.clientInfo})
            .then(result => res.send(result)))
        .catch(err => {
            res.status(404).json({message: "Not found"})
        })
}

exports.removeClientInfo = async (req, res) => {
    clientsInfo.deleteOne({_id: req.params.id})
        .then(result => res.send(result))
        .catch(err => {
            res.status(404).json({message: "not found"})
        })
}

exports.pushWhenIn = async (req, res) => {
    clientsInfo.findOneAndUpdate({_id: req.params.clientInfo}, {
        $push: {
            whenIn: moment().format("YYYY-MM-DD HH:mm")
        }
    })
        .then(() => clientsInfo.findOne({_id: req.params.clientInfo})
            .then(result => res.send(result)))
}

exports.pushWhenOut = async (req, res) => {
    clientsInfo.findOneAndUpdate({_id: req.params.clientInfo}, {
        $push: {
            whenOut: moment().format("YYYY-MM-DD HH:mm")
        }
    })
        .then(() => clientsInfo.findOne({_id: req.params.clientInfo})
            .then(result => res.send(result)))
}

exports.removeWhenOutRecord = async (req, res) => {
    clientsInfo.findOneAndUpdate({_id: req.params.clientInfo}, {
        $pull: {
            whenOut: req.body.whenOut
        }
    })
        .then(result => res.send(result))
}