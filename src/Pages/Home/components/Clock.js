import React, { Component } from "react";
import "./Clock.css"

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="clock">
      <h2  id="time-right">{this.state.date.toLocaleTimeString()}.</h2>
        </div>
    
    );
  }
}

export default Clock;