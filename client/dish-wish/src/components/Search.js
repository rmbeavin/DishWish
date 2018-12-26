import React from 'react';
import axios from 'axios';
import Info from './Info';



export default class Search extends React.Component{
  state = {
    ingredientName: ''
  };
  change = e => {
    this.setState({
      [e.target.name] : e.target.value
    });
  };
  onSubmit(e) {
    e.preventDefault();
    let userInput = JSON.stringify(this.state.ingredientName).slice(1,-1);
      axios.get(`http://cors-anywhere.herokuapp.com/recipepuppy.com/api/?i=${userInput}`).then((res) => {
      console.log(res.data.results);
      console.log(res.data.results[1].title);
      });
  };
    render(){
    return (
      <div>
      <form>
      <input name="ingredientName" placeholder="chicken, rice, tomatoes, etc" value={this.state.ingredientName} onChange={e => this.change(e)}/>
      <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
      </div>
    )
  }
};
