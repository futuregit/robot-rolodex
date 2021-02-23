import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }

  render() {
    return (
      <div className="App">
       {
         this.state.robots.map( robot => 
            <h1 key={robot.id} > {robot.name} </h1> 
          )
       }
      </div>
    );
  };
}

export default App;
