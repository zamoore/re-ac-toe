// Modules
import React, { Component } from 'react';

class ResetGame extends Component {
  render() {
    return (<button type="button" onClick={() => this.props.onClick()}>Reset</button>);
  }
}

export default ResetGame;
