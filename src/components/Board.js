// Modules
import React, { Component } from 'react';

// App code
import Cell from './Cell';

class Board extends Component {
  renderCell(i) {
    return (<Cell value={this.props.cells[i]} onClick={() => this.props.onClick(i)} />);
  }
  render() {
    return (
      <div className="board">
        <div className="row">
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
        </div>
        <div className="row">
          {this.renderCell(3)}
          {this.renderCell(4)}
          {this.renderCell(5)}
        </div>
        <div className="row">
          {this.renderCell(6)}
          {this.renderCell(7)}
          {this.renderCell(8)}
        </div>
      </div>
    );
  }
}

export default Board;
