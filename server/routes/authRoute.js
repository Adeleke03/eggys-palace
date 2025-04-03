import express from "express";
import { forgotPassword, resetPassword, signIn, signUp } from "../controllers/authController.js";
const router = express.Router();

//sign up route

router.post("/sign-up", signUp);

// sign in route

router.post("/sign-in", signIn);

// forgot password 
router.post("/forgot-password",forgotPassword);


// reset password route
router.put("/reset-password/:resetToken", resetPassword);

export default router;