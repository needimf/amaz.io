import React from 'react';

const CheckoutRow = (props) => {
  return (
    <tr>
      <td>{props.productDetails.product.name}</td>
      <td>{"$" + props.productDetails.product.price.toString()}</td>
      <td>{props.productDetails.quantity}</td>
    </tr>
  )
}

export default CheckoutRow;
