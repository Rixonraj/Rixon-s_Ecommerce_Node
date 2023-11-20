const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// Define the schema for individual subtotals
const IndividualSubtotalSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  subtotal: { type: Number, required: true },
  fileName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity:  { type: Number, required: true },
});
const checkoutDetailsSchema = new Schema({
    address: { type: String, required: true },
    city: { type: String, required: true },
    fullName: { type: String, required: true },
    zipCode: { type: String, required: true },
});
// Define the main schema for the request body
const OrderSchema = new Schema({
  individualSubtotals: { type: [IndividualSubtotalSchema], required: true },
  overallSubtotal: { type: Number, required: true },
  orderStatus: { type: String, required: true },
  checkoutDetails:  { type: [checkoutDetailsSchema], required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model; replace with your actual user model name
    required: true,
  },
});

const Order = mongoose.model('Order', OrderSchema, 'ecommerce_orders');
module.exports = Order;