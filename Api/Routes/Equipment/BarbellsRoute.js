const barbellsController = require("../../Controllers/Equipment/BarbellsController")
const express = require("express")
const router = express.Router()

router.get("/Barbells", barbellsController.getBarbells)

router.post("/Barbells", barbellsController.newBarbell)

router.delete("/Barbells/:barbellId", barbellsController.removeBarbell)

module.exports = router;