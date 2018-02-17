import React from 'react';
import CheckoutTable from './../../components/CheckoutTable/CheckoutTable';

const CheckoutPage = (props) => {

  return (
    <div className='container'>
      <div className='row'>

      </div>
      <div className='row justify-content-center'>
        <div className='col-9'>
          <div className="jumbotron">
            <h1 className="display-4">Cart</h1>
            {props.order.products && <CheckoutTable 
              order={props.order}
              addProduct={props.addProduct}
              removeProduct={props.removeProduct}
            />}
            {/* <p class="lead">
              <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage;