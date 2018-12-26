import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';

class Home extends Component{
  render() {
    return (
      <div>
        <div className= "logo">
          <img className="Logotwo" src="Logo-design-3.png" alt="  "/>
        </div>
        <div className="body">
        <div className="search">
          <Search/>
        </div>
        <div className="results">
          <p>Ingredients entered are </p>
        </div>
      </div>
    </div>
    )
  }
}

export default Home;
