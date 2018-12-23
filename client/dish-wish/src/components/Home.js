import React, { Component } from 'react';

class Home extends Component{
  render () {
    return (//HTML GOES HERE//
      <div>
        <div class="head">
          //main menu goes here.
        </div>
        <div class= "logo">
          <img scr="https://files.slack.com/files-pri/T055GEHEJ-FF1LCANA3/logo-design-3.png" alt="Logo one"/>
        </div>
        <div class="body">
        <div class="search">
          //API goes here, sreach bar.
        </div>
        <div class="results">
          //Results from search go here.
        </div>
        <div class="foot">
          <p>All Rights Reserved Copyright 2019 DishWish</p>
        </div>
      </div>
    </div>
    )
  }
}


export default Home;
