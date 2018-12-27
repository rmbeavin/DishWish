import React from 'react';
import axios from 'axios';
import Info from './Info';



export default class Search extends React.Component{
  state = {
    ingredientName: ''
  };
  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    });
    console.log(this.state.ingredientName);
  };
  onSubmit(e) {
    e.preventDefault();
    let userInput = JSON.stringify(this.state.ingredientName).slice(1,-1);
      axios.get(`http://cors-anywhere.herokuapp.com/recipepuppy.com/api/?i=${userInput}`).then((res) => {
      console.log(res.data.results)
      });
  };
    render(){
    return (
      <div>
      <form>
        <input name="ingredientName" placeholder="chicken, rice, tomatoes, etc" value={this.state.ingredientName} onChange={e => this.handleChange(e)}/>
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
      </div>
    )
  }
};
