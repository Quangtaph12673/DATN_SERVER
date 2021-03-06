import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    note: {
      type: String,
    },
    cart: {
      type: Object,
    },
    cartNumber: {
      type: Number,
    },
    totalPrice: {
      type: Number,
    },
    status: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
