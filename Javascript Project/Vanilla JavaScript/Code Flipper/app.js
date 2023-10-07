let hexFlag = false;
let simpleFlag = true;

const simpleColor = ["red", "green", "blue", "yellow", "brown"];
const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function onClick() {
  let color;
  if (simpleFlag) {
    const randomIndex = Math.floor(Math.random() * simpleColor.length);
    color = simpleColor[randomIndex];
  }

  if (hexFlag) {
    let randomIndex = "#";
    for (let i = 0; i < 6; i++) {
      randomIndex += hexColor[Math.floor(Math.random() * hexColor.length)];
    }
    color = randomIndex;
  }

  document.querySelector("span.color").style.color = color;
  document.body.style.background = color;
  document.querySelector("span.color").textContent = color;
}

function selected() {
  if (simpleFlag) {
    document.getElementById("simple").style.fontWeight = "bold";
    document.getElementById("hex").style.fontWeight = "";
  }
  if (hexFlag) {
    document.getElementById("hex").style.fontWeight = "bold";
    document.getElementById("simple").style.fontWeight = "";
  }
}

function hexClick() {
  hexFlag = true;
  simpleFlag = false;
  selected();
}
function simpleClick() {
  simpleFlag = true;
  hexFlag = false;
  selected();
}

addEventListener("DOMContentLoaded", () => {
  document.getElementById("clickMe").addEventListener("click", onClick);
  document.getElementById("hex").addEventListener("click", hexClick);
  document.getElementById("simple").addEventListener("click", simpleClick);
  selected();
});
