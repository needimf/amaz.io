const express = require('express');
const router = express.router;
const orderCtrl = require('../controllers/ordersController');

router.get('/products', orderCtrl.getProducts);
router.post('/order', orderCtrl.createOrder);

module.exports = router;