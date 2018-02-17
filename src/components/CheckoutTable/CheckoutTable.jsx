import React from 'react';
import CheckoutRow from './../CheckoutRow/CheckoutRow';

const CheckoutTable = (props) => {
  return (
    <div>
      <table className="table table-hover">
        <thead className='thead-dark'>
          <tr>
            <th>Item</th>
            <th>Cost</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {props.order.products.map((product, i) => 
            <CheckoutRow 
              key={i}
              productDetails={product}
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

export default CheckoutTable;