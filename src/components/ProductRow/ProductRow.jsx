import React from 'react';

const ProductRow = (props) => {
  return (
    <tr>
      <td>{props.product.name}</td>
      <td>{"$" + props.product.price.toString()}</td>
      <td>{props.product.sku}</td>
      <td>
        <div className="container">
          <div className="row">
            <p className="col-9">{props.product.description}</p>
            <button 
              className="col-1 btn mr-1"
              onClick={() => {props.addProduct(props.product._id, props.order._id)}}
            >
              +
            </button>
            <button className="col-1 btn">
              -
            </button>
          </div>
        </div>
      </td>
    </tr>
  )
}

export default ProductRow;