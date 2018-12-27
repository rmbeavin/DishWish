import React from 'react';

const Search = (props) => {
    return (
      <div>
        <form onSubmit={props.onSubmit}>
          <input type="text" name="test" value={JSON.stringify(props.inputValue)} placeholder="chicken, rice, tomatoes, etc" onChange={props.handleSearchChange} />
          <button>Submit</button>
        </form>
      </div>
    )
};
export default Search;
