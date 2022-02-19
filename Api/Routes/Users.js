const express = require('express');
const router = express.Router();
const usersController = require("../Controllers/UsersController")
const authController = require("../Controllers/authController")
const checkAuth = require("../middleware/check-auth");

router.get("/Users", usersController.getUsers);

router.get("/Users/:userId", usersController.getSingleUser);

router.post("/Users", usersController.newUser);

router.delete("/Users/:userId", usersController.removeUser);

router.post("/Users/Login", authController.userLogin)

router.get("/CurrentUser", checkAuth, authController.getCurrentUser)


module.exports = router;