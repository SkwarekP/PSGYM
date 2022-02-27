const express = require('express');
const router = express.Router();
const AssortmentController = require("../Controllers/AssortmentController")
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, (Math.random()).toFixed(2) + file.originalname)
    }
})

const fileFilter = async (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})

router.get("/assortment", AssortmentController.getAssortment);

router.post("/assortment", upload.single("picture"), AssortmentController.newPosition);

router.put("/assortment/:assortmentId", AssortmentController.editStan)

router.delete("/assortment/:assortmentId", AssortmentController.removeItem)


module.exports = router;