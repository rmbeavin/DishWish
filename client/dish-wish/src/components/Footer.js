import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Footer extends Component{
  render () {
    return (
      <div>
        <div className="copyright">
          <p>All Rights Reserved Copyright 2019 DishWish</p>
        </div>
        <div className="contact">
          <ul>
          <Link to="/contact">Contact Us</Link>
          </ul>
        </div>
      </div>
    )
  }
}


export default Footer;
