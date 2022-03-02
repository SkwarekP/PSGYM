const express = require('express');
const router = express.Router();
const WorkersController = require("../Controllers/WorkersController")

router.get("/Workers", WorkersController.getWorkers)

router.get("/Workers/:name", WorkersController.getWorkerByName)

router.post("/Workers", WorkersController.newWorker)

router.delete("/Workers/:workerId", WorkersController.removeWorker)

router.put("/Workers/:workerId/Events", WorkersController.editEventWorker)

router.delete("/Workers/:workerId/Events", WorkersController.removeTest)

/*
router.delete("/Workers/Test/:workerId", WorkersController.removeTest)
*/

module.exports = router;