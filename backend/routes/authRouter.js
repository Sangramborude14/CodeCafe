//external
const express = require('express');
const authRouter = express.Router();

//local
const authController = require("../controller/authController");

//signup
authRouter.post("/signup",authController.signupPost);

//login
authRouter.get("/login",authController.loginGet);
authRouter.post("/login",authController.loginPost);

//logout
authRouter.post("/logout",authController.Logout)

//isLoggedIn
authRouter.get("/status",authController.getStatus)
module.exports = authRouter


