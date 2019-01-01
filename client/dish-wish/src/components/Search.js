import React from 'react';
import '../styles/search.css';

const Search = (props) => {
    return (
      <div className="searchContent">
        <h1 className="contentTitle">LETS GET COOKING!</h1>
        <img className="cooking" src="cooking.jpg" alt="" />
        <form className="searchForm" onSubmit={props.onSubmit}>
          <input className="searchInput" type="text" name="test" value={JSON.stringify(props.inputValue)} placeholder="chicken, rice, tomatoes, etc" onChange={props.handleSearchChange} />
          <div className="buttons">
              <button className="submitbutton">Submit</button>
              <button className="sortButton" onClick={props.sendArrayMaker}>Sort</button>
          </div>
        </form>
      </div>
    )
};
export default Search;
