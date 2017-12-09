import React from 'react';
import ProductRow from '../ProductRow/ProductRow';

const ProductsTable = (props) => {
  let filteredProducts = props.products.filter(product => product.name.includes(props.search));

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>SKU</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => <ProductRow key={product.sku} product={product} order={props.order} />)}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsTable;