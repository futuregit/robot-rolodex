import React, { Component } from 'react';
import logo from './logo.svg';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

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

  handleChange = e => {
    this.setState({ searchField: e.target.value})
  };

  render() {
    //destructuring an object
    const {robots, searchField} = this.state;
    const filterRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder='search robots'
          handleChange={this.handleChange}
        />
        <CardList robots={filterRobots} />       
      </div>
    );
  };
}

export default App;
