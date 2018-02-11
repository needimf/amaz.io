const Order = require('../models/order');
const Product = require('../models/product');

function getProducts(req, res) {
  Product.find({}, (err, products) => {
    res.json(products);
  });
}

function getOrder(req, res) {
  Order.findOne({}).populate('products').exec((err, order) => {
    res.json(order);
  });
}

function addProduct(req, res) {
  // let productId = req.body.productId
  // let orderId = req.body.orderId
  // Order.findOneAndUpdate({_id: orderId}, { $set : {products: }},(err, order) => {
  //   order.products.push(mongoose.Types.ObjectId(productId))
  // })
}

function removeProduct(req, res) {

}

function checkout(req, res) {

}

module.exports = {
  getProducts,
  getOrder,
  addProduct,
  removeProduct,
  checkout
}