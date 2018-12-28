import React from 'react';
import axios from 'axios';
import {Grid} from 'semantic-ui-react';
import Search from './Search';
import DisplayRecipe from './Cards';
import { Redirect } from 'react-router-dom';

class Display extends React.Component {
  state = {
    recipes: [],
    ingredientName: '',
    fireRedirect: true
  }
  handleSearchChange = e => {
    this.setState({
      ingredientName: e.target.value
    });

  };

  // arrayMaker(){
  //   this.state.recipes.map(this.state.recipes.ingredients.split(',').length => recArr.push());
  //
  // }

  onSubmit = (e) => {
    e.preventDefault();
      axios.get(`http://cors-anywhere.herokuapp.com/recipepuppy.com/api/?i=${this.state.ingredientName}`).then((res) => {
      console.log(res.data.results);
      this.setState({recipes: res.data.results, fireRedirect: false})
      console.log(this.state.recipes[0].ingredients.split(',').length)
      // console.log(arrayMaker());
      });
  };
  render() {
    return(
      <div>
        { this.state.fireRedirect && <Search handleSearchChange={this.handleSearchChange} ingredientValue={this.state.ingredientName} onSubmit={this.onSubmit} />}
        <br></br>
          <Grid className="background" columns='equal' centered>
            {this.state.recipes.map((recipe, index) => {
              return <DisplayRecipe key={index} recipe={recipe} />
            })}
          </Grid>
      </div>
      );
    }
  }
export default Display;
