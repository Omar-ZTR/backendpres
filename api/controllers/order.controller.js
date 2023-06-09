import createError from "../utils/createError.js";
import Order from "../models/order.model.js";
import Gig from "../models/gig.model.js";

export const createOrder = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.gigId);

    if (!gig) {
      throw createError(404, "Gig not found");
    }

    const { fullName, emailAddress, desc, phoneNumber, date, address, city } = req.body;

    const newOrder = new Order({
      gigId: gig._id,
      img: gig.cover,
      title: gig.title,
      buyerId: req.userId,
      sellerId: gig.userId,
      price: gig.price,
      fullName,
      emailAddress,
      desc,
      phoneNumber,
      date,
      address,
      city,
    });

    await newOrder.save();

    res.status(201).send(newOrder);
  } catch (err) {
    next(err);
  }
};

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });

    res.status(200).send(orders);
  } catch (err) {
    next(err);
  }
};

export const confirmOrder = async (req, res, next) => {
  try {
    const order = await Order.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $set: {
          isCompleted: true,
        },
      },
      { new: true }
    );

    if (!order) {
      throw createError(404, "Order not found");
    }

    res.status(200).send(order);
  } catch (err) {
    next(err);
  }
};
