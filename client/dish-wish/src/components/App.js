import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Header from './Header';
import Logo from './Logo';
import Search from './Search';
import Info from './Info';
import Footer from './Footer';

class App extends React.Component{
  render () {
    return (
      <Router>
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
			</div>
		</Router>
    )
  }
}


export default App;
