// Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';

// App code
import Board from './Board';
import Notification from './Notification';
import ResetGame from './ResetGame';
import ScoreBoard from './ScoreBoard';
import { checkForWin } from '../utils';
import { claimCell, changePlayer, resetGame } from '../actions';

// Styles
import '../styles/app.css';

class Game extends Component {
  handleCellClick(i) {
    let { cells, claimCell, changePlayer } = this.props;

    if (checkForWin(cells) || cells[i] !== null) { return; }

    claimCell(i);
    changePlayer(this.props.activePlayer);
  }
  render() {
    return (
      <section className="app">
        <Board cells={this.props.cells} onClick={(i) => this.handleCellClick(i)} />
        <Notification activePlayer={this.props.activePlayer} winner={checkForWin(this.props.cells)} />
        <ResetGame onClick={() => this.props.resetGame()} />
        <ScoreBoard xWinCount={this.props.xWinCount} oWinCount={this.props.oWinCount} />
      </section>
    );
  }
}

export default connect(
  (props) => (props),
  (dispatch) => {
    return {
      claimCell(index) {
        dispatch(claimCell(index));
      },
      changePlayer(currentPlayer) {
        dispatch(changePlayer(currentPlayer));
      },
      resetGame() {
        dispatch(resetGame());
      }
    };
  }
)(Game);
