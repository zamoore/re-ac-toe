const initialState = {
  activePlayer: 'X',
  cells: Array(9).fill(null),
  xWinCount: 0,
  oWinCount: 0
};

function ticTacToe(state = initialState, action) {
  switch (action.type) {
    case 'CLAIM_CELL':
      return Object.assign({}, state, {
        cells: state.cells.map((cell, index) => {
          if (action.index === index) {
            return state.activePlayer;
          }
          return cell;
        })
      });
    default:
      return state;
  }

  return state;
}

export default ticTacToe;
