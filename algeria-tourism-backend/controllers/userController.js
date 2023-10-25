import asyncHandler from "express-async-handler";
import User from "../models/userModel";

//@desc Register a user
//@route POST /api/users/register
//@access Public

export const registerUser = asyncHandler(async (req, res) => {
  const {
    lastname,
    firstname,
    email,
    password,
    confirmPassword,
    profilePicture,
  } = req.body;

  if (password !== confirmPassword) {
    return res.status(404).json({
      message: "Passwords don't match",
    });
  }

  if (!lastname || !firstname || !email || !password) {
    return res.status(404).json({
      message: "Provide all values please!",
    });
  }

  const user = await User.create({
    lastname,
    firstname,
    email,
    password,
    profilePicture,
  });
  console.log(user);
  user.password = undefined; // to not send the password in the response
  res.json(user);
});

//@desc Login a user
//@route POST /api/users/login
//@access Public

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({
      message: "Email invalid",
    });
  }
  if (password !== user.password) {
    return res.status(404).json({
      message: "Password invalid",
    });
  }
  user.password = undefined; // to not send the password in the response
  res.json(user);
});

//@desc Current user info
//@route POST /api/users/current
//@access Private

export const currentUser = asyncHandler(async (req, res) => {
  res.send("Current user");
});

//@desc Logout a user
//@route POST /api/users/logout
//@access Public

export const logoutUser = asyncHandler(async (req, res) => {
  res.send("Logout");
});
