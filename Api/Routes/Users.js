const express = require('express');
const router = express.Router();
const multer = require("multer")
const usersController = require("../Controllers/UsersController")
const authController = require("../Controllers/authController")
const checkAuth = require("../middleware/check-auth");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, (Math.random()).toFixed(2) + file.originalname)
    }
})

const fileFilter = async (req, file, cb) => {
    if (file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png") {
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


router.get("/Users", usersController.getUsers);

router.get("/Users/:userId", usersController.getSingleUser);

router.post("/Users", upload.single("profilePicture"), usersController.newUser);

router.delete("/Users/:userId", usersController.removeUser);

router.post("/Users/Login", authController.userLogin)

router.get("/CurrentUser", checkAuth, authController.getCurrentUser)

router.put("/CurrentUser/:currentUserId", upload.single("picture"), usersController.changeProfilePicture)

// change password
router.put("/changePassword/:userId", checkAuth, authController.changePassword)

//change email
router.put("/changeEmail/:userId", checkAuth, authController.changeEmail)


module.exports = router;