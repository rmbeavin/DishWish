import React, { Component } from 'react';
import Recipes from './Recipes';

class Home extends Component{
  render() {
    return (
      <div>
        <div className= "logo">
          <img className="Logotwo" src="Logo-design-3.png" alt="  "/>
        </div>
        <div className="body">
        <div className="search">
          <Recipes />
        </div>
        <div className="results">

        </div>
      </div>
    </div>
    )
  }
}

export default Home;
