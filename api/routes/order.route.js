import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { createOrder, getOrders, confirmOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.post("/:gigId", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);
router.put("/:id", verifyToken, confirmOrder);

export default router;
 