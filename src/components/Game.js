// Modules
import React, { Component } from 'react';

// App code
import Board from './Board';
import Notification from './Notification';
import ResetGame from './ResetGame';
import ScoreBoard from './ScoreBoard';

// Styles
import '../styles/app.css';

const checkForWin = (cells) => {
  const winningStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  let winner = null;

  winningStates.forEach((state, index) => {
    let [a, b, c] = winningStates[index];
    let firstClaimedCell = cells[a];

    if (firstClaimedCell && firstClaimedCell === cells[b] && firstClaimedCell === cells[c]) {
      winner = firstClaimedCell;
    }
  });

  return winner;
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      activePlayer: 'X',
      cells: Array(9).fill(null),
      xWinCount: 0,
      oWinCount: 0
    };
  }
  handleWin() {
    let winner = checkForWin(this.state.cells);

    if (!winner) { return; }

    this.setState({
      activePlayer: this.state.activePlayer,
      cells: this.state.cells,
      xWinCount: winner === 'X' ? this.state.xWinCount + 1 : this.state.xWinCount,
      oWinCount: winner === 'O' ? this.state.oWinCount + 1 : this.state.oWinCount,
    });
  }
  handleCellClick(i) {
    const cells = this.state.cells.slice();

    if (checkForWin(cells) || cells[i] !== null) { return; }

    cells[i] = this.state.activePlayer;
    this.setState({
      activePlayer: this.state.activePlayer === 'X' ? 'O' : 'X',
      cells: cells,
      xWinCount: this.state.xWinCount,
      oWinCount: this.state.oWinCount
    }, this.handleWin);
  }
  handleResetClick() {
    this.setState({
      activePlayer: 'X',
      cells: Array(9).fill(null),
      xWinCount: this.state.xWinCount,
      oWinCount: this.state.oWinCount
    });
  }
  render() {
    return (
      <section className="app">
        <Board cells={this.state.cells} onClick={(i) => this.handleCellClick(i)} />
        <Notification activePlayer={this.state.activePlayer} winner={checkForWin(this.state.cells)} />
        <ResetGame onClick={() => this.handleResetClick()} />
        <ScoreBoard xWinCount={this.state.xWinCount} oWinCount={this.state.oWinCount} />
      </section>
    );
  }
}

export default App;
