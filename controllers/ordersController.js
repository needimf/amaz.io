const Order = require('../models/order');
const Product = require('../models/product');

function getProducts(req, res) {
  Product.find({}, (err, products) => {
    res.json(products);
  });
}

function getOrder(req, res) {
  Order.findOne({}).populate('products.product').exec((err, order) => {
    if (order) {
      res.json(order);
    } else {
      Order.create({}, (err, order) => {
        res.json(order);
      })
    }
  });
}

function addProduct(req, res) {
  Product.findById(req.body.productId, (err, product) => {
    if (err) {
      console.log(err);
    } else {
      Order.findById(req.body.orderId, (err, order) => {
        let indexInCart = order.products.findIndex(cartProduct => cartProduct.product.toString() === product._id.toString());
        if (indexInCart !== -1) {
          order.products[indexInCart].quantity += 1;
        } else {
          order.products.push({product: product._id, quantity: 1});
        }
        order.save((err) => {
          if (err) {
            return res.json(500, {
              error: 'Cannot save the order.'
            })
          }
          order.populate('products.product', (err, order) => {
              res.json(order);
            });
        });
      });
    }
  });
}

function removeProduct(req, res) {
  Order.findById(req.body.orderId, (err, order) => {
    let productIndex = order.products.findIndex(product => product.product.toString() === req.body.productId.toString());

    
    if (order.products[productIndex].quantity > 1) {
      order.products[productIndex].quantity -= 1;
    } else {
      order.products.splice(productIndex, 1);
    }


    order.save((err) => {
      if (err) {
        return res.json(500, {
          error: 'Cannot save the order.'
        })
      }
      order.populate('products.product', (err, order) => {
          res.json(order);
        });
    });
  })
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