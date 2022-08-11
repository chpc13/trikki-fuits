let cells = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "🍉";
let result = document.querySelector(".result");
let btns = document.querySelectorAll(".btn");

let conditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

const triki = (element, i) => {
  element.value = currentPlayer;
  element.disabled = true;
  cells[i] = currentPlayer;
  currentPlayer = currentPlayer == "🍉" ? "🍄" : "🍉";
  result.innerHTML = `Jugad@r ${currentPlayer} Le Toca`;
  for (let i = 0; i < conditions.length; i++) {
    let condition = conditions[i];
    let a = cells[condition[0]];
    let b = cells[condition[1]];
    let c = cells[condition[2]];

    if (a == "" || b == "" || c == "") {
      continue;
    }

    if (a == b && b == c) {
      result.innerHTML = `Jugad@r ${a} Gano Mij@🌟🎉🎊`;
      
      btns.forEach((btn) => (btn.disabled = true));
    }
  }
};
const reset = () => {
     cells = ["", "", "", "", "", "", "", "", ""];
     btns.forEach(element => {
          element.value = ""
          element.disabled=false
     })
     currentPlayer = '🍉'
     result.innerHTML = `Jugad@r ${currentPlayer} Le Toca`;
     
}

document.querySelector('#reset').addEventListener('click', reset);

btns.forEach((boton, indice) => {
  boton.addEventListener("click", () => triki(boton, indice));
});
