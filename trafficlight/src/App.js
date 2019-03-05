import React, { Component } from 'react';
import TrafficLight from './Component/TrafficLight';
import './App.css';
import './Component/TrafficLight.css';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentColor: RED
    }
    setInterval(()=>{
      this.setState({
        currentColor: this.getCurrentColor(this.state.currentColor)
      });
    },1000);
  }

  getCurrentColor(color) {
    switch (color) {
      case RED:
        return YELLOW;
      case YELLOW:
        return GREEN;
      default:
        return RED;
    }
  }

  render() {
    const {currentColor} = this.state;
    return (
      <div className="App">
        <TrafficLight currentColor={currentColor} />
      </div>
    );
  }
}

export default App;
