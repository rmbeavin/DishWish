import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.css';

class Header extends Component{
  render () {
    return (
      <div className="navbar">
        <div className="links">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/recipes">Recipes</Link>
          </ul>
        </div>
        <div className="dropdown">
          <button className="dropbtn">More
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <ul>
              <Link to="/Contact">Contact Us</Link>
              <Link to="/Faq">FAQ</Link>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
