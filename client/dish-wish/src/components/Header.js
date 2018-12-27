import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.css';

class Header extends Component{
  render () {
    return (
      <div className="navbar">
        <div class="icon">
          <Link to="/"><img className="icon logo" src="icon.png" alt="  "/></Link>
        </div>
        <div class="links">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </ul>
      </div>
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
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
