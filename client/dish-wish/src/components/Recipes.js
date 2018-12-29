import React from 'react';
import axios from 'axios';
import {Grid} from 'semantic-ui-react';
import Search from './Search';
import DisplayRecipe from './Cards';

const columns = {
  height: "100%",
  width: '100%'
}

class Recipes extends React.Component {
  state = {
    recipes: [],
    ingredientName: '',
    // render: true,
  }

  arrayMaker = () => {
    let x = this.state.recipes
    let newArray = [];
    for (let i = 0; i < x.length; i++) {
      let test = x[i]
      test.num_ingredients = test.ingredients.split(',').length;
      newArray.push(test)
    }
    let newTest = newArray.sort((a, b) => (a.num_ingredients - b.num_ingredients))
    this.setState({recipes: newTest})
    console.log(this.state.recipes)
  }

  handleSearchChange = e => {
    this.setState({ingredientName: e.target.value});
  };

  onSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://cors-anywhere.herokuapp.com/recipepuppy.com/api/?i=${this.state.ingredientName}`).then((res) => {
      // console.log('original order: ' + res.data.results);
      console.log(this.state.ingredientName)
      this.setState({recipes: res.data.results})
      // console.log(this.state.recipes[0].ingredients.split(',').length)
      // let test = this.arrayMaker(this.state.recipes)
      // let newTest = test.sort((a, b) => b - a)
      // console.log('test: ' + test)
      // console.log(this.state.recipes.arrayMaker());
    });
  };

  render() {
    return (
      <div>
      <Search onSubmit={this.onSubmit} handleSearchChange={this.handleSearchChange} sendArrayMaker={this.arrayMaker} />
      <Grid style={columns} columns='equal' centered>
        {
          this.state.recipes.map((recipe, index) => {
            return <DisplayRecipe key={index} recipe={recipe}/>
          })
        }
      </Grid>
    </div>
  );
  }
}
export default Recipes;
