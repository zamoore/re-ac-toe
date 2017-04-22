export function claimCell(index) {
  return {
    type: 'CLAIM_CELL',
    index
  };
};

export function changePlayer(currentPlayer) {
  return {
    type: 'CHANGE_PLAYER',
    currentPlayer
  }
};

export function resetGame() {
  return {
    type: 'RESET_GAME'
  }
};
