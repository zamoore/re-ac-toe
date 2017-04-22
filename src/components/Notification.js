// Modules
import React, { Component } from 'react';

class Notification extends Component {
  render() {
    let { winner } = this.props;

    if (winner && winner !== 'D') {
      return (<p className="notification-message">{this.props.winner} is the winner!</p>);
    } else if (winner) {
      return (<p className="notification-message">It's a draw!</p>)
    } else {
      return (<p className="notification-message">{this.props.activePlayer} is next.</p>);
    }
  }
}

export default Notification;
