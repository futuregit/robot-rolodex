import React, { Component } from 'react';
import logo from './logo.svg';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    console.log("I'm in componentDIdMount")
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  };  

  render() {
    console.log("This is state robots in App.js", this.state.robots)
    return (
      <div className="App">
        <CardList robots={this.state.robots} />       
      </div>
    );
  };
}

export default App;
