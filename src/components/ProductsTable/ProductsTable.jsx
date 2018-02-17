import React from 'react';
import ProductRow from '../ProductRow/ProductRow';

const ProductsTable = (props) => {
  let filteredProducts = props.products.filter(product => product.name.includes(props.search.toLowerCase()));

  return (
    <div className="col-12">
      <table className="table table-hover">
        <thead className='thead-dark'>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>SKU</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => 
            <ProductRow 
              key={product.sku}
              product={product}
              order={props.order}
              addProduct={props.addProduct}
              removeProduct={props.removeProduct}
            />
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsTable;