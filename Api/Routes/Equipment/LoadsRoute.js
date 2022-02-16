const loadsController = require("../../Controllers/Equipment/LoadsController")
const express = require("express")
const router = express.Router();

router.get("/Loads", loadsController.getLoads)

router.post("/Loads", loadsController.newLoad)

router.delete("/Loads/:loadId", loadsController.removeLoad)

module.exports = router