import React from 'react';
import {Link} from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
import ProductsTable from '../../components/ProductsTable/ProductsTable';

const CataloguePage = (props) => {
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <SearchForm 
        search={props.search}
        updateSearch={props.updateSearch}
        />
      </div>
      <div className="row">
        <ProductsTable 
        search={props.search}
        products={props.products}
        order={props.order}
        addProduct={props.addProduct}
        removeProduct={props.removeProduct}
        />
      </div>
    </div>
  )
}

export default CataloguePage;