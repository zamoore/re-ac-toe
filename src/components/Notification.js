// Modules
import React, { Component } from 'react';

class Notification extends Component {
  render() {
    if (this.props.winner) {
      return (<p>{this.props.winner} is the winner!</p>);
    } else {
      return (<p>{this.props.activePlayer} is next.</p>);
    }
  }
}

export default Notification;
