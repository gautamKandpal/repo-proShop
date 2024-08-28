import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// router.route("/").post(registerUser);
// router.route("/logout").post(logoutUser);
router.route("/").post(registerUser).get(getUsers);

router.post("/login", authUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .put(protect, updateUserProfile)
  .get(protect, getUserProfile);
router.route("/:id").get(getUserById).delete(deleteUser).put(updateUser);

export default router;
