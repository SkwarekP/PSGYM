const express = require("express")
const router = express.Router();
const machineController = require("../../Controllers/Equipment/MachinesController")

router.get("/Machines", machineController.getMachines)

router.post("/Machines", machineController.newMachine)

router.delete("/Machines/:machineId", machineController.removeMachine)

module.exports = router