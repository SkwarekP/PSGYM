const express = require('express');
const router = express.Router();
const WorkersController = require("../Controllers/WorkersController")

router.get("/Workers", WorkersController.getWorkers)

router.post("/Workers", WorkersController.newWorker)

router.delete("/Workers/:workerId", WorkersController.removeWorker)

router.put("/Workers/:workerId/Events", WorkersController.editEventWorker)

module.exports = router;