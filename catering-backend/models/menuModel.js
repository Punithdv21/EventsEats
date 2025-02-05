const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema(
  {
    catererId: { type: mongoose.Schema.Types.ObjectId, ref: 'Caterer', required: true },
    itemName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String }, // URL for the menu item's image
  },
  { timestamps: true }
);

module.exports = mongoose.model('Menu', menuSchema);
