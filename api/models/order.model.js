import mongoose from "mongoose";
const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    gigId: {
      type: Schema.Types.ObjectId,
      ref: "Gig",
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sellerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    buyerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    fullName: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
   
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", OrderSchema);
