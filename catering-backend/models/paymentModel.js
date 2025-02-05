const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
  {
    bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
    amount: { type: Number, required: true },
    paymentMethod: {
      type: String,
      enum: ['credit_card', 'debit_card', 'upi', 'paypal'],
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed'],
      default: 'pending',
    },
    transactionDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Payment', paymentSchema);
