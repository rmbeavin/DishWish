import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import FAQ from './FAQ';
import Founders from './Founders';
import Header from './Header';
import Logo from './Logo';
import Search from './Search';
import Info from './Info';
import Footer from './Footer';
import DemoCarousel from './Carousel'

class App extends React.Component{
  render () {
    return (
      <Router>
			<div>
        <Header/>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={FAQ} />
        <Route path="/founders" component={Founders} />
        
        <Footer/>
			</div>
		</Router>
    )
  }
}


export default App;
