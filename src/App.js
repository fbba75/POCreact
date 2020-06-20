import React, { Component } from 'react';
import './App.css';
import { CreateTrip } from './components/CreateTrip';


class App extends Component {
  render () {
  return (
    <div className="App">
      <CreateTrip />
    </div>
    );
  }
}

export default App;
