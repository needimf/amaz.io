const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./product');

const orderSchema = new Schema({
  products: [{ type: Schema.Types.ObjectId, ref: 'Product'}]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Order', orderSchema);