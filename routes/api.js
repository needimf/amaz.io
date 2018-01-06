const express = require('express');
const router = express.Router();
const orderCtrl = require('../controllers/ordersController');

router.get('/products', orderCtrl.getProducts);
router.get('/order', orderCtrl.getOrder);

router.post('/add-product', orderCtrl.addProduct);
router.post('/remove-product', orderCtrl.removeProduct);

router.post('/checkout', orderCtrl.checkout)

module.exports = router;