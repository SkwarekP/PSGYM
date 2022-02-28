const othersController = require("../../Controllers/Equipment/OthersController")
const express = require("express")
const router = express.Router()

router.get("/Others", othersController.getOthers)

router.post("/Others", othersController.newOther)

router.delete("/Others/:otherId", othersController.removeOther)

router.put("/Others/:otherId", othersController.editOther)

module.exports = router;