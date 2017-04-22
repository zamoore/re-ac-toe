export function checkForWin(cells) {
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
