import { checkForWin } from '../utils';

const initialState = {
  activePlayer: 'X',
  cells: Array(9).fill(null),
  xWinCount: 0,
  oWinCount: 0
};

function ticTacToe(state = initialState, action) {
  switch (action.type) {
    case 'CLAIM_CELL':
      let newState = Object.assign({}, state, {
        cells: state.cells.map((cell, index) => {
          if (action.index === index) {
            return state.activePlayer;
          }
          return cell;
        })
      });

      let winner = checkForWin(newState.cells);

      if (winner && winner !== 'D') {
        if (winner === 'X') {
          newState.xWinCount++;
        } else {
          newState.oWinCount++;
        }
      }

      return newState;
    case 'CHANGE_PLAYER':
      return Object.assign({}, state, {
        activePlayer: action.currentPlayer === 'X' ? 'O' : 'X'
      });
    case 'RESET_GAME':
      return Object.assign({}, state, {
        activePlayer: initialState.activePlayer,
        cells: initialState.cells
      });
    case 'DECLARE_WINNER':
      console.log('Fuck');
    default:
      return state;
  }
}

export default ticTacToe;
