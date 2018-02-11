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
  }
}

export default AMAZIOAPI;