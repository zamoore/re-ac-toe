// Modules
import React, { Component } from 'react';

class Cell extends Component {
  render() {
    return (
      <button type="button" className="cell" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

export default Cell;
