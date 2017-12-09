import React from 'react';
import {Link} from 'react-router-dom';
// import SearchForm from '../../components/SearchForm/SearchForm';
import ProductsTable from '../../components/ProductsTable/ProductsTable';

const CataloguePage = (props) => {
  return (
    <div>
      {/* <div>
        <SearchForm 
        search={props.search}
        />
      </div> */}
      <div>
        <ProductsTable 
        search={props.search}
        products={props.products}
        order={props.order}
        />
      </div>
    </div>
  )
}

export default CataloguePage;