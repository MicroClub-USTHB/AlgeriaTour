import express from "express";
import {
  registerUser,
  loginUser,
  //   currentUser,
  logoutUser,
} from "../controllers/userController";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

// router.get("/profile", currentUser);

router.post("/logout", logoutUser);

export default router;
