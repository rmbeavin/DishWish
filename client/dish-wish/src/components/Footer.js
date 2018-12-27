import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/footer.css';

class Footer extends Component{
  render () {
    return (
      <div className="bottom">
        <div className="contacts">
          <Link to="/Contact">Contact Us</Link>
        </div>
        <div className="copyright">
          All Rights Reserved Copyright 2019 DishWish, LLC.
        </div>
        <div className="socials">
          <img className="facebook" src="facebook.png" alt="  "/>
          <img className="instagram" src="instagram.png" alt="  "/>
          <img className="pinterest" src="pinterest.png" alt="  "/>
          <img className="twitter" src="twitter.png" alt="  "/>
        </div>
      </div>
    )
  }
}


export default Footer;
