// Modules
import React, { Component } from 'react';

class ResetGame extends Component {
  render() {
    return (
      <div>
        <p>X win count is {this.props.xWinCount}</p>
        <p>O win count is {this.props.oWinCount}</p>
      </div>
    );
  }
}

export default ResetGame;
