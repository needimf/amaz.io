const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: [{ 
    product: { type: Schema.Types.ObjectId, ref: 'Product'},
    quantity: {type: Number, default: 0}
  }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Order', orderSchema);