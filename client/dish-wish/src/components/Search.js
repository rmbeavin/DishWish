import React from 'react';
import axios from 'axios';
import Info from './Info';



const Search = (props) => {
    return (
      <div>
        <form onSubmit={props.onSubmit}>
          <input type="text" name="test" value={props.inputValue} placeholder="chicken, rice, tomatoes, etc" onChange={props.handleSearchChange} />
          <button>Submit</button>
        </form>
      </div>
    )
};

export default Search;
