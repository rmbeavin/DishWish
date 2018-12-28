import React from 'react';
import axios from 'axios';
import {Grid} from 'semantic-ui-react';
import Search from './Search';
import DisplayRecipe from './Cards';
// import { Redirect } from 'react-router-dom';

class Display extends React.Component {
  state = {
    recipes: [],
    ingredientName: '',
    fireRedirect: true,
    sortedRecipes: []
  }

 // arrayMaker = () => {
 //    let stuffArray = [];
 //    for(let i=0; i < this.state.recipes.length; i++) {
 //      stuffArray.push(this.state.recipes[i].ingredients.split(',').length);
 //    }
 //    console.log(stuffArray)
 //
 //  };

 arrayMaker = (x) => {
    let newArray = [];
    for(let i=0; i < x.length; i++) {
      let test = x[i]
      test.num_ingredients = test.ingredients.split(',').length;
      newArray.push(test)
    }
      let newTest = newArray.sort((a, b) => (a.num_ingredients - b.num_ingredients))
      console.log(newTest)
      this.setState({sortedRecipes: newTest})
      
    }


  handleSearchChange = e => {
    this.setState({
      ingredientName: e.target.value
    });

  };

  onSubmit = (e) => {
    e.preventDefault();
      axios.get(`http://cors-anywhere.herokuapp.com/recipepuppy.com/api/?i=${this.state.ingredientName}`).then((res) => {
      console.log(res.data.results);
      this.setState({recipes: res.data.results, fireRedirect: false})
      // console.log(this.state.recipes[0].ingredients.split(',').length)
      let test = this.arrayMaker(this.state.recipes)
      // let newTest = test.sort((a, b) => b - a)
      console.log(test)
      // console.log(this.state.recipes.arrayMaker());
      });
  };

  render() {
    return(
      <div>
        { this.state.fireRedirect && <Search handleSearchChange={this.handleSearchChange} ingredientValue={this.state.ingredientName} onSubmit={this.onSubmit} />}
          <Grid className="background" columns='equal' centered>
            {this.state.sortedRecipes.map((recipe, index) => {
              return <DisplayRecipe key={index} recipe={recipe} />
            })}
          </Grid>
      </div>
      );
    }
  }
export default Display;
