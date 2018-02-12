import React from 'react';
import {Link} from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
import ProductsTable from '../../components/ProductsTable/ProductsTable';

const CataloguePage = (props) => {
  return (
    <div>
      <div>
        <br></br>
        <SearchForm 
        search={props.search}
        updateSearch={props.updateSearch}
        />
      </div>
      <br></br>
      <div>
        <ProductsTable 
        search={props.search}
        products={props.products}
        order={props.order}
        addProduct={props.addProduct}
        />
      </div>
    </div>
  )
}

export default CataloguePage;