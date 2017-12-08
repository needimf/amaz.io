require('./../config/database');
const products = require('./sample-data');
const Order = require('./../models/order');
const Product = require('./../models/product');

let productsSeed = Product.remove({}).then(() => {
  return Product.create(products)
});

let orderSeed = Order.remove({}).then(() => {
  return Order.create({products: []})
});

Promise.all([productsSeed, orderSeed]).then(() => {
  require('mongoose').connection.close();
  process.exit();
});