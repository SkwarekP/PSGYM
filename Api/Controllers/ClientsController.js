const Client = require("../Models/Clients");

exports.newClient = async (req, res) => {
    const client = new Client({
        name: req.body.name,
        lastName: req.body.lastName,
        address: req.body.address,
        email: req.body.email,
        number_tel: req.body.number_tel,
        number_magnetic_cart: req.body.number_magnetic_cart,
        clientInfo: req.body.clientInfo,
        active: req.body.active,
    });
    client
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

exports.getClients = async (req, res) => {
    console.log("Wszyscy klienci")
    Client.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}


exports.getSingleClient = async (req, res) => {
    Client.findOne({_id: req.params.clientId})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

exports.editClient = async (req, res) => {
    Client.findOneAndUpdate({_id: req.params.clientId}, req.body)
        .then(() => {
            Client.findOne({_id: req.params.clientId}).then(result => {
                res.send(result)
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

exports.clientDelete = async (req, res) => {
    Client.deleteOne({_id: req.params.clientId})
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        })
}

