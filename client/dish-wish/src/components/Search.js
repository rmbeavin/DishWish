import React from 'react';
import '../styles/search.css';

const Search = (props) => {
    return (
      <div className="content">
        <form onSubmit={props.onSubmit}>
          <input type="text" name="test" value={JSON.stringify(props.inputValue)} placeholder="chicken, rice, tomatoes, etc" onChange={props.handleSearchChange} />
          <div className="buttons">
            <div className="submit">
              <button>Submit</button>
            </div>
            <div className="sort">
              <button onClick={props.sendArrayMaker}>Sort</button>
            </div>
          </div>
        </form>
      </div>
    )
};
export default Search;
