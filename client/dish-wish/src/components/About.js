import React, { Component } from 'react';
import '../styles/about.css';
import DemoCarousel from './Carousel'



class About extends Component{
  render () {
    return (
      <section id ='about'>
      <div>
          <header className="header">
            <h1 className="aboutTitle">About DishWish</h1>
          </header>

          <div className="mainContent">
            <p className="aboutParagraph">Wondering what to cook? This is a random recipe generator based on the ingredients you have readily available! DishWish was founded in 2018 by Robert Beavin, Stephanie Olaya and Jacob Allen as a service for people who struggle to come up with recipes on a day to day basis. The recipe is generated instantly, on the click of a button. </p>
            <p className="motto">Our motto:
              <p className="mottotext">Your dish, on demand</p>
            </p>
          </div>

          <div className="whyUs">
            <p className="instantService">instant service</p>
            <p className="convenience">Can be used anywhere, even at the comfort of your own home.</p>
            <p className="easyToUse"> It is easy to use, just input the ingredients you have on the search bar, and a recipe will be generated</p>
          </div>

          <div>
            <DemoCarousel/>
          </div>

          <div>
            <h1 className="highlight">Make your cooking wish come true!</h1>
            <p className ="highlight2">We have a million recipes for you to try.</p>
          </div>

          <div className="socialMedia">
            <img className="twitter" src="#" alt="" />
            <img className="instagram" src="#" alt="" />
            <img className="facebook" src="#" alt="" />
            <img className="pinterest" src="#" alt="" />
          </div>
        </div>
    </section>
  )
  }
}



export default About;
