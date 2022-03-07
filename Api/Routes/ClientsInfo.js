const express = require('express');
const router = express.Router();
const clientsInfo = require("../Controllers/ClientsInfoController")

router.get("/clientsInfo", clientsInfo.getAllClientsInfo);

router.get("/clientsInfo/getSingleInfo/:clientInfo", clientsInfo.getSingleClientInfo)

router.delete("/clientsInfo/:id", clientsInfo.removeClientInfo)

router.post("/clientsInfo/Add", clientsInfo.newClientsInfo);

router.put("/clientsInfo/Edit/:clientInfo", clientsInfo.editClientInfo)

router.put("/clientsInfo/Edit/:clientInfo/whenIn", clientsInfo.pushWhenIn)

router.put("/clientsInfo/Edit/:clientInfo/whenOut", clientsInfo.pushWhenOut)

router.put("/clientsInfo/Edit/:clientInfo/whenOut/pull", clientsInfo.removeWhenOutRecord)

module.exports = router;