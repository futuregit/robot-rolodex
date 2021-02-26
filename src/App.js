import React, { Component } from 'react';
import logo from './logo.svg';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    };
  }

  componentDidMount() {
    //Grabbing json data from API server
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  };  

  render() {
    return (
      <div className="App">
        <input 
          type='search' 
          placeholder='search robots' 
          onChange={e => this.setState({searchField: e.target.value})}  />
        <CardList robots={this.state.robots} />       
      </div>
    );
  };
}

export default App;
