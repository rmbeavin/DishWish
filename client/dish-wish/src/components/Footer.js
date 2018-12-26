import React, { Component } from 'react';

class Footer extends Component{
  render () {
    return (
      <div className="bottom">
        <div className="contact">
          <a href="#">Contact Us</a>
        </div>
        <div className="copyright">
          <p>All Rights Reserved Copyright 2019 DishWish</p>
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
