const express = require("express");
const {
	registerUser,
	loginUser,
	currentUser,
	logoutUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", currentUser);

router.post("/logout", logoutUser);

module.exports = router;
