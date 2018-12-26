import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="appetizer.jpg" />
                </div>
                <div>
                    <img src="mainDish.jpeg" />
                </div>
                <div>
                    <img src="dessert.jpeg" />
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel
