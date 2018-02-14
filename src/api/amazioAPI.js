const AMAZIOAPI = {
  fetchProductsAndOrder: function() {
    let productURI = '/api/products';
    const getProducts = fetch(productURI, {
      method: 'get'
    }).then(res => {
      if(res.ok) {
        return res.json();
      } else {
        throw new Error('Network response from \'/api/products\' not ok.');
      }
    });

    let orderURI = '/api/order';
    const getOrder = fetch(orderURI, {
      method: 'get'
    }).then(res => {
      if(res.ok) {
        return res.json();
      } else {
        throw new Error('Network response from \'/api/order\' not ok.');
      }
    });

    return Promise.all([getProducts, getOrder]).catch(err => console.log(err));
  },

  addProductToOrder: function(productId, orderId) {
    let URI = '/api/add-product';
    return fetch(URI, {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify({productId, orderId})
    }).then(res => {
      if(res.ok) {
        return res.json();
      } else {
        throw new Error('Response from \'/api/add-product\' not ok.');
      }
    }).catch(err => undefined);
  },

  removeProductFromOrder: function(productId, orderId) {
    let URI = '/api/remove-product';
    return fetch(URI, {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify({productId, orderId})
    }).then(res => {
      if(res.ok) {
        return res.json();
      } else {
        throw new Error('Response from \'/api/remove-product\' not ok.');
      }
    }).catch(err => undefined);
  }
}

export default AMAZIOAPI;