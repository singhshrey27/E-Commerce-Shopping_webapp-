import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

//Routers
// Register || Method post
router.post("/register", registerController);

// LOGIN ROUTE || POST
router.post("/login", loginController);

//Test routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
