import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay
              height={"400px"}
              width={"800px"}>
                <div className="appetizer">
                    <img src="appetizer.jpeg" alt="plate of food"/>
                </div>
                <div>
                    <img src="mainDish.jpeg" alt="food"/>
                </div>
                <div>
                    <img src="dessert.jpeg" alt="another food"/>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel
