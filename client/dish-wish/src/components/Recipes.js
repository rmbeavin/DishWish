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
    recipes: []
  }

  componentDidMount() {
    axios.get(`http://cors-anywhere.herokuapp.com/recipepuppy.com/api/?i=chicken`)
    .then(({data}) => {
      this.setState({recipes: data.results})
      console.log(this.state.recipes);
    }).catch(err => {
      console.log(err.message);
    });
  }

  // componentDidUpdate() {
  //   if(this.state.category !== '')  {
  //     axios.get(`/api/${this.state.category}`)
  //       .then(({data}) => {
  //         this.setState({articles: data})
  //       })
  //   }
  // }

  // handleChange = (e, { value }) => this.setState({ category: `${value}`  })


  render() {
    return(
      <div>
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
