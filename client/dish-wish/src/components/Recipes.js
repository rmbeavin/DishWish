// import React from 'react';
// import Cards from './Cards';
// import axios from 'axios';
// import {Grid} from 'semantic-ui-react';
// import Search from './Search';
//
// const words = {
//   margin: '40px'
// }
//
// class Display extends React.Component {
//   state = {
//     recipes: []
//   }
//
//   componentDidMount() {
//     axios.get(`/api`)
//     .then(({data}) => {
//       this.setState({recipes: data})
//       console.log(this.state.recipes);
//     }).catch(err => {
//       console.log(err.message);
//     });
//   }
//
//   // componentDidUpdate() {
//   //   if(this.state.category !== '')  {
//   //     axios.get(`/api/${this.state.category}`)
//   //       .then(({data}) => {
//   //         this.setState({articles: data})
//   //       })
//   //   }
//   // }
//
//   // handleChange = (e, { value }) => this.setState({ category: `${value}`  })
//
//
//   render() {
//     return(
//       <div>
//         <Grid className="background" columns='equal' centered>
//           {this.state.recipes.map((recipes, index) => {
//             return <DisplayRecipes key={index} recipes={recipes} />
//           })}
//         </Grid>
//       </div>
//       );
//     }
//   }
//
// export default Display;
