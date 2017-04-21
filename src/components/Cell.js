// Modules
import React, { Component } from 'react';

class Cell extends Component {
  render() {
    return (
      <div className="cell" onClick={() => alert('click')}>
      </div>
    );
  }
}

export default Cell;
