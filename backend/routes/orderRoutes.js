import express from "express";
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDeliver,
  getAllOrders,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

// router.route("/").post(registerUser);
// router.route("/logout").post(logoutUser);
router
  .route("/")
  .post(protect, addOrderItems)
  .get(protect, admin, getAllOrders);

router.route("/myorders").get(protect, getMyOrders); //mine
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, admin, updateOrderToDeliver);

export default router;
