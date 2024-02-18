let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let symbols = ["o", "x"];
let winner = 0;
function handleMove(position) {

  if (!board[position]) {
    setTimeout(() => {
      if (isWin()) {
        alert(`o vencedor foi o '${winner.toUpperCase()}'`);
        restart();
      }
      if (noWin() && !isWin()) {
        alert("deu velha!")
        restart();
      }
    }, 200);

    if (!isWin() && !noWin()) {
      board[position] = symbols[playerTime];
      if (playerTime == 0) {
        playerTime = 1;
      } else {
        playerTime = 0;
      }
    }
  }
}
function noWin() {
  const noWinner = board.every(element => element !== "");
  return noWinner;
}
function isWin() {
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [6, 4, 2],
  ];

  for (let i = 0; i < win.length; i++) {
    const [a, b, c] = win[i];

    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      winner = board[a];
      return true;
    }
  }

  return false;
}

