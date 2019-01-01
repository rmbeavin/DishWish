import React, { Component } from 'react';
import '../styles/about.css';
import DemoCarousel from './Carousel'

class About extends Component{
  render () {
    return (
      <section id ='about'>
        <div>
          <header className="aboutContent">
            <h1 className="aboutTitle">About DishWish</h1>
          </header>
          <div className = "DemoCarousel">
            <DemoCarousel/>
          </div>
          <div className="fridgetoPlate">
            <img className="redFridge"src="redfridge.png" alt="" />
            <img className="redArrow1"src="redarrow.png" alt="" />
            <img className="computer"src="computer.png" alt="" />
            <img className="redArrow2"src="redarrow.png" alt="" />
            <img className="redPlate"src="redplate.png" alt="" />
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
          <div className="companyMotto">
              <p className="mottotext">Your dish, on demand</p>
          </div>
          <div className="mainContent">
            <div className="picAndQuestion">
              <p className="wonder">What is DishWish?</p>
              <p className="aboutParagraph"> This is a random recipe generator based on the ingredients you have readily available! DishWish was founded in 2018 by Robert Beavin, Stephanie Olaya and Jacob Allen as a service for people who struggle to come up with recipes on a day to day basis. The recipe is generated instantly, at the click of a button.</p>
            </div>
            <img className="stockedfridge" src="stockedfridge.jpg" alt="" />
          </div>
      </div>
    </section>
  )
  }
}

export default About;
