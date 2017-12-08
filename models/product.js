const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  sku: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Product', productSchema);