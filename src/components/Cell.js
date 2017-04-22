// Modules
import React, { Component } from 'react';

class Cell extends Component {
  render() {
    let { value, onClick } = this.props;

    return (
      <button type="button" className={`cell ${value}`} onClick={() => onClick()}>
        {value}
      </button>
    );
  }
}

export default Cell;
