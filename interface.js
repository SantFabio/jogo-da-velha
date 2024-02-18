document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;
  handleMove(position);
  upDateSquare();
}

function upDateSquare() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    let position = square.id;
    let symbols = board[position];
    if (symbols != "") {
      square.innerHTML = `<div class='${symbols}'></div>`;
    }
  });
}
function restart() {
  let verification = document.getElementsByClassName("resertButton")[0];
  if (!verification) {
    const resertButton = document.createElement('div');
    resertButton.classList.add('resertButton');
    resertButton.textContent = 'Recomeçar?';
    document.body.appendChild(resertButton);
    resertButton.addEventListener("click", () =>{
      window.location.reload();
    }
    )
  }
}
