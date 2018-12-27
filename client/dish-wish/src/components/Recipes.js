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

  handleChange = e => {
    this.setState({
      ingredientName: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      ingredientName: e.target.elements.ingredientName.value
    });
    console.log(this.state.ingredientName)
    // let userInput = JSON.stringify(this.state.ingredientName).slice(1,-1);
      axios.get(`http://cors-anywhere.herokuapp.com/recipepuppy.com/api/?i=${this.state.ingredientName}`).then((res) => {
      console.log(res.data.results);
      // console.log(userInput)
      this.setState({recipes: res.data.results})
      });
  };

  // componentDidUpdate() {
  //   // let userInput = JSON.stringify(this.state.ingredientName).slice(1,-1);
  //   axios.get(`http://cors-anywhere.herokuapp.com/recipepuppy.com/api/?i=${this.state.ingredientName}`).then((res) => {
  //     this.setState({ recipes: res.data.results })
  //     console.log(res.data.results);
  //   // console.log(userInput)
  //   });
  // }


  // componentDidMount() {
  //   axios.get(`http://cors-anywhere.herokuapp.com/recipepuppy.com/api/?i=chicken`)
  //   .then(({data}) => {
  //     this.setState({recipes: data.results})
  //     console.log(this.state.recipes);
  //   }).catch(err => {
  //     console.log(err.message);
  //   });
  // }

  render() {
    return(
      <div>
        <Search handleChange={this.handleChange} onSubmit={this.onSubmit} />
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
