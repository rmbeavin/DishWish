import React from 'react';
import '../styles/search.css';

const Search = (props) => {
    return (
      <div className="content">
        <div className="contentTitle">LET'S GET COOKING!</div>
        <img className="cooking" src="cooking.jpg" alt="" />
        <form className="searchForm" onSubmit={props.onSubmit}>
          <input className="searchInput" type="text" name="test" value={JSON.stringify(props.inputValue)} placeholder="chicken, rice, tomatoes, etc" onChange={props.handleSearchChange} />
          <div className="buttons">
            <div className="submit">
              <button className="submitbutton">Submit</button>
            </div>
            <div className="sort">
              <button className="sortButton" onClick={props.sendArrayMaker}>Sort</button>
            </div>
          </div>
        </form>
      </div>
    )
};
export default Search;
