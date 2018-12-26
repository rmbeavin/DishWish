import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.css';

class Header extends Component{
  render () {
    return (
      <div className="navbar">
        <ul>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        </ul>
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
