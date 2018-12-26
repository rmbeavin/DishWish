import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.css';

class Header extends Component{
  render () {
    return (
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <div className="dropdown">
          <button className="dropbtn">Dropdown
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">

            <ul>
              <Link to="/Contact">Contact Us</Link>
              <Link to="/FAQ">FAQ</Link>
              <Link to="/Founders">Founders</Link>
              
            </ul>

            <a href="#">Contact</a>
            <a href="#">FAQ</a>
            <a href="#">Founders</a>

          </div>
        </div>
      </div>
    )
  }
}

export default Header;
