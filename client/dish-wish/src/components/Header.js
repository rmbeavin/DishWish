import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
  render () {
    return (
      <div className="nav">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
        </ul>
      </div>
    )
  }
}

export default Header;
