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

const router = express.Router();

// router.route("/").post(registerUser);
// router.route("/logout").post(logoutUser);
router.route("/").post(registerUser).get(getUsers);

router.post("/login", authUser);
router.post("/logout", logoutUser);

// router.route("/profile").get(getUserProfile);
// router.route("/profile").put(updateUserProfile);
router.route("/profile").put(updateUserProfile).get(getUserProfile);

// router.route("/users/:id").get(getUserById);
// router.route("/users/:id").delete(deleteUser);
// router.route("/users/:id").put(updateUser);
router.route("/:id").get(getUserById).delete(deleteUser).put(updateUser);

export default router;
