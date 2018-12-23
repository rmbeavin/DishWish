import React, { Component } from 'react';
import axios from 'axios'

header
export default class Search extends Component{
  render () {
    return(
      <form onSubmit={getUserInput()}>
      <h4>Enter your ingredients:</h4>
      <input placeholder="chicken, carrots, garlic" type="text" name="ingredients"></input>
      <br></br>
      <button>Submit</button>
      </form>
    )
  }
}

getRecipes = (e) => {
    e.preventDefault();
    const recipes = []
    console.log(recipes);
    if(recipes){
      axios.get(`https://www.recipepuppy.com/api/?i=${ingredients}`).then((res) => {
        console.log(res.data)
        const recipeArr = res.data;
        this.setState({
          name: recipeArr.name,

        });
      }).catch((err)) => {
        this.setState({
          recipeArr: 'No recipes found!'
        })
      }
    }
  }

  getUserInput() {

  }
