const asyncHandler = require("express-async-handler");

//@desc Register a user
//@route POST /api/users/register
//@access Public

const registerUser = asyncHandler(async (req, res) => {
	res.send("Register");
});

//@desc Login a user
//@route POST /api/users/login
//@access Public

const loginUser = asyncHandler(async (req, res) => {
	res.send("Login");
});

//@desc Current user info
//@route POST /api/users/current
//@access Private

const currentUser = asyncHandler(async (req, res) => {
	res.send("Current user");
});

//@desc Logout a user
//@route POST /api/users/logout
//@access Public

const logoutUser = asyncHandler(async (req, res) => {
	res.send("Logout");
});

module.exports = { registerUser, loginUser, currentUser, logoutUser };
