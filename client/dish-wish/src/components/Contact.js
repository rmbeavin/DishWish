import React, { Component } from 'react';
import '../styles/contact.css';

class Contact extends Component{
  state = {
    firstName: '',
    lastName:'',
    email: '',
    Question: '',
  };

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit();
    this.setState({
      firstName: '',
      lastName:'',
      email: '',
      Question: '',
    });
  }

  render (){
    return (
      <div className="content">
        <div className="centered">
        <p className="contact">Contact Us</p>
        <form className='form'>
          <input className='inputfirstname'
            name='firstName'
            placeholder='First Name'
            value={this.state.firstName}
            onChange={ e => this.setState({ firstName: e.target.value})}/>
          <input className='inputlastname'
            name='lastName'
            placeholder='Last Name'
            value={this.state.lastName}
            onChange={ e => this.setState({ lastName: e.target.value})}/>
          <input className='inputemail'
            name='email'
            placeholder='Email'
            value={this.state.email}
            onChange={ e => this.setState({ email: e.target.value})}/>
          <input className='inputquestion'
            name='Question'
            placeholder='Question'
            value={this.state.Question}
            onChange={ e => this.setState({ Question: e.target.value})}/>

          <button className="contactButton" onClick={(e)=> this.onSubmit}>Submit</button>
        </form>
        </div>
      </div>
    );
  }
}

export default Contact;
