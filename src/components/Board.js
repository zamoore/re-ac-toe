// Modules
import React, { Component } from 'react';

// App code
import Cell from './Cell';

class Board extends Component {
  render() {
    return (
      <div className="board">
        <div className="row">
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div className="row">
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div className="row">
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
    );
  }
}

export default Board;
