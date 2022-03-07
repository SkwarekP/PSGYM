const express = require('express');
const router = express.Router();
const ClientController = require("../Controllers/ClientsController")

router.get("/clients", ClientController.getClients);

router.get("/clients/:clientId", ClientController.getSingleClient);

router.post("/clients", ClientController.newClient);

router.put("/clients/:clientId/Edit", ClientController.editClient)

router.delete("/clients/:clientId", ClientController.clientDelete);


module.exports = router;