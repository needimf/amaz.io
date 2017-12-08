const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const product = require('./product');

const orderSchema = new Schema({
  products: [product]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Order', orderSchema);