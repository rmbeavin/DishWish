import React from 'react';
import Cards from './Cards';
import axios from 'axios';
import {Grid} from 'semantic-ui-react';
import Search from './Search';
import DisplayRecipe from './Cards';

const words = {
  margin: '40px'
}
class Display extends React.Component {
  state = {
    recipes: [],
    ingredientName: ''
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
      this.setState({recipes: res.data.results})
      });
  };
  render() {
    return(
      <div>
        <Search handleSearchChange={this.handleSearchChange} ingredientValue={this.state.ingredientName} onSubmit={this.onSubmit} />
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
