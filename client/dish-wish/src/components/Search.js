import React from 'react';
import axios from 'axios';
import Info from './Info';



const Search = (props) => {
  // state = {
  //   ingredientName: ''
  // };
  // handleChange = e => {
  //   this.setState({
  //     [e.target.name] : e.target.value
  //   });
  // };
  // onSubmit = (e) => {
  //   e.preventDefault();
  //   let userInput = JSON.stringify(this.state.ingredientName).slice(1,-1);
  //     axios.get(`http://cors-anywhere.herokuapp.com/recipepuppy.com/api/?i=${userInput}`).then((res) => {
  //     console.log(res.data.results);
  //     console.log(userInput)
  //     });
  // };

// potentially move this back to input
  // onChange={props.handleChange}
    return (
      <div>
      <form onSubmit={props.onSubmit}>
        <input name="ingredientName" placeholder="chicken, rice, tomatoes, etc" />
        <button>Submit</button>
      </form>
      </div>
    )
};

export default Search;
