const dumbellsController = require("../../Controllers/Equipment/DumbellsController")
const express = require("express")
const router = express.Router()

router.get("/Dumbells", dumbellsController.getDumbells)

router.post("/Dumbells", dumbellsController.newDumbell)

router.delete("/Dumbells/:dumbellId", dumbellsController.removeDumbell)

router.put("/Dumbells/:dumbellId", dumbellsController.editDumbell)

module.exports = router;