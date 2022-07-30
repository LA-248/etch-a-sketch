// Getting elements from the DOM
let container = document.querySelector('.container');
let grid = document.querySelector('.grid');
let clearButton = document.querySelector('.clearButton');
let sizeSlider = document.querySelector('#sizeSlider');
let sliderNumber = document.querySelector('.sliderNumber');
let eraserButton = document.querySelector('.eraserButton');
let randomButton = document.querySelector('.randomButton');

// Defining the initial number of squares per side for the grid
let squareSize = 16;

function setCurrentSize(newSize) {
  squareSize = newSize;
}

// Changes the color of the grid squares when being hovered over
let changeColor = e => e.target.style.backgroundColor = "black";

// Changes the number of squares per side on the grid by using the slider, and changes the numbers above the slider
sizeSlider.onmousemove = e => updateSizeValue(e.target.value);
sizeSlider.onchange = e => changeSize(e.target.value);

// Generate new grid with updated square size
function changeSize(value) {
  setCurrentSize(value)
  updateSizeValue(value)
  reloadGrid()
}

// Function to update the text values above the slider that denote how many squares the grid has per side
function updateSizeValue(number) {
  sliderNumber.innerHTML = `${number} x ${number}`
}

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

createGrid(squareSize);

// Clear the grid
function clearGrid() {
  let gridSquares = grid.querySelectorAll('div');
  gridSquares.forEach((div) => div.style.background = "white");
}

// Reload the grid - This reloads and generates a new grid with the updated number of squares per side
function reloadGrid() {
  clearGrid()
  createGrid(squareSize)
}

// Clear button event listener
clearButton.addEventListener('click', clearGrid);