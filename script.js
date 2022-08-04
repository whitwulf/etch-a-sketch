const grid = document.querySelector(".grid");
const startButton = document.querySelector(".btn");

let sideSize = 0;

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const handleGrid = () => {
  sideSize = prompt("Enter side size (max 32)");

  if (sideSize > 100) {
    sideSize = 100;
  }

  grid.style.setProperty("grid-template-columns", `repeat(${sideSize}, 1fr)`);
  grid.style.setProperty("grid-auto-rows", "minmax(10px, auto)");

  removeAllChildNodes(grid);
  createGrid(sideSize);
};

const createDiv = () => {
  const div = document.createElement("div");
  div.classList.add("box");
  div.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = `#${randomColor()}`;
  });
  grid.appendChild(div);
};

const createGrid = (size) => {
  for (let i = 0; i < size * size; i++) {
    createDiv();
  }
};

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

startButton.addEventListener("click", handleGrid);
