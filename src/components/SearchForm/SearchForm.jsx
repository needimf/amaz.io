import React from 'react';

const SearchForm = (props) => {
  return (
    <div>
      <input 
        type="text" 
        onChange={(e) => {props.updateSearch(e)}} 
        value={props.search}
        placeholder="Search for a product"
      />
    </div>
  )
}

export default SearchForm;