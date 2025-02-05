const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    catererId: { type: mongoose.Schema.Types.ObjectId, ref: 'Caterer', required: true },
    eventDate: { type: Date, required: true },
    menuItems: [
      {
        menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true },
        quantity: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed', 'cancelled'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);
