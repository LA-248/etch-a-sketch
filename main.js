// Getting elements from the DOM
let container = document.querySelector('.container');
let grid = document.querySelector('.grid');
let clearButton = document.querySelector('.clearButton');


// Creating the grid
function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;

  for (let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', changeColor);
    grid.appendChild(square);
  }
}

createGrid(16);

// Changes the color of the grid squares when being hovered over
function changeColor(e) {
  e.target.style.backgroundColor = "black";
}

// Clear the grid
function clearGrid() {
  let gridSquares = grid.querySelectorAll('div');
  gridSquares.forEach((div) => div.style.background = "white");
}

clearButton.addEventListener('click', clearGrid);