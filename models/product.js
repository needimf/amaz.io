const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  price: String,
  description: String,
  sku: String
  },
  {
    timestamps: true
  }
);

module.exports = productSchema;