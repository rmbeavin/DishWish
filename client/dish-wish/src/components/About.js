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

          <div className = "DemoCarousel">
            <DemoCarousel/>
          </div>

          <div className="fridgetoPlate">
            <img src="fridge.png" alt="" />
            <img src="orangearrow.png" alt="" />
            <img src="computer.png" alt="" />
            <img src="orangearrow.png" alt="" />
            <img src="cutlery.png" alt="" />
          </div>

          <div className="companyMotto">
              <p className="mottotext">Your dish, on demand</p>
          </div>

          <div className="mainContent">
            <div className="picAndQuestion">
              <p className="wonder">What is DishWish?</p>
              <p className="aboutParagraph"> This is a random recipe generator based on the ingredients you have readily available! DishWish was founded in 2018 by Robert Beavin, Stephanie Olaya and Jacob Allen as a service for people who struggle to come up with recipes on a day to day basis. The recipe is generated instantly, on the click of a button.</p>
            </div>
            <img className="stockedfridge" src="stockedfridge.jpg" alt="" />
          </div>

          <div className="whyUs">
            <p className="instantService">Instant service</p>
            <p className="convenience">Can be used anywhere, even at the comfort of your own home.</p>
            <p className="easyToUse"> It is easy to use, just input the ingredients you have on the search bar, and a recipe will be generated</p>
          </div>

          <div>
            <h1 className="highlight">Make your cooking wish come true!</h1>
            <p className ="highlight2">We have a million recipes for you to try.</p>
          </div>

          <div>
            <p className="howItWorks">How it works</p>
            <div className="howItWorksContent">
              <p className="step1"> 1. Look at the ingredients you have available</p>
              <p className="step2">2. Input your ingredients in the searchbar</p>
              <p className="step3">3. Search</p>
              <p className="step4">4. Pick a recipe and start cooking!</p>
            </div>
          </div>
        </div>
    </section>
  )
  }
}



export default About;
