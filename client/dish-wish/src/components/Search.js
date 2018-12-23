import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredientName: []
    }

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const ingredient = this.state;
      const getRecipes = () => {
      axios.get(`https://www.recipepuppy.com/api/?i=${ingredient}`).then((res) => {
        console.log(res.data)
        const recipeArr = [res.data];
      })
    }
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      ['ingredientName'] : event.target.value
    });
  }


  render() {
    const {ingredients} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p><input type="text" placeholder="chicken, rice, tomatoes, onions, etc." ingredientName='ingredient' onChange="this.handleInputChange"></input>
          </p>
          <button>Search</button>
        </form>
      </div>
    )
  }
}
