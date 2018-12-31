import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay
              height={400}
              width={800}>
                <div className="appetizer">
                    <img src="appetizer.jpeg"/>
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

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel')

export default DemoCarousel
