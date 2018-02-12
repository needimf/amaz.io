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
  Product.findById(req.body.productId, (err, product) => {
    if (err) {
      console.log(err);
    } else {
      Order.findById(req.body.orderId, (err, order) => {
        order.products.push(product._id);
        order.save((err) => {
          if (err) {
            return res.json(500, {
              error: 'Cannot save the order.'
            })
          }
          order.populate('products', (err, order) => {
              res.json(order);
            });
        });
      });
    }
  });
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