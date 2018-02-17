import React from 'react';

const SearchForm = (props) => {
  return (
    <div className='col-6'>
      <div className='input-group'>
        <input 
          type="text" 
          onChange={(e) => {props.updateSearch(e)}} 
          value={props.search}
          placeholder="Search for a product"
          className='form-control'
        />
      </div>    
    </div>
  )
}

export default SearchForm;