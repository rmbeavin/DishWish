import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
  render() {
    return (
      <div>
        <div className= "logo">
          <img className="Logotwo" src="Logo-design-3.png" alt="  "/>
        </div>
        <div className="body">
        <div className="search">
          //API goes here, sreach bar.
        </div>
        <div className="results">
          //Results from search go here.
        </div>
      </div>
    </div>
    )
  }
}

export default Home;
