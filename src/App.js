import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./App.css";
import "./logincss.css"

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
	<div className='container'>
		
		
      <div className="boxshadow">
	  <div class="imgcontainer" align='center'>
			<img src="logo.png" alt="Avatar" class="avatar-logo" />
		</div>


        <form onSubmit={this.handleSubmit} id='container'>
          <FormGroup controlId="email" >
            <ControlLabel><h5>Email</h5></ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
			  className='text'
              onChange={this.handleChange}
			  placeholder="Enter Email address"
            />
          </FormGroup>
          <FormGroup controlId="password" >
            <ControlLabel><h5>Password</h5></ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
			  className='text'
			  placeholder="Enter password.."
            />
          </FormGroup>
          <Button
            block
            className='butt'
            disabled={!this.validateForm()}
            type="submit">
            Login
          </Button>
        </form>
      </div>
	  </div>
    );
  }
}