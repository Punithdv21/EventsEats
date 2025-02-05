const mongoose = require('mongoose');

const catererSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    businessName: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    rating: { type: Number, default: 0 },
    verified: { type: Boolean, default: false }, // Verified by admin
    menus: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }], // List of menu items
  },
  { timestamps: true }
);

module.exports = mongoose.model('Caterer', catererSchema);
