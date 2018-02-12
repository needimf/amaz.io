const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: [{ type: Schema.Types.ObjectId, ref: 'Product'}]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Order', orderSchema);