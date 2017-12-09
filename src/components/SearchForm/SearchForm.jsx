import React from 'react';

const SearchForm = (props) => {
  return (
    <div>
      <input 
        type="text" 
        onChange={(e) => {props.updateSearch(e)}} 
        value={props.search} 
      />
    </div>
  )
}

export default SearchForm;