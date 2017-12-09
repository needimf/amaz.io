import React from 'react';

const ProductRow = (props) => {
  return (
    <tr>
      <td>{props.product.name}</td>
      <td>{"$" + props.product.price.toString()}</td>
      <td>{props.product.sku}</td>
      <td>{props.product.description}</td>
    </tr>
  )
}

export default ProductRow;