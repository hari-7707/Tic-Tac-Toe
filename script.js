const boxes = document.querySelectorAll(".box");
document.querySelector(".reset").addEventListener("click", () => {
  reset();
});
document.querySelector(".restart").addEventListener("click", () => {
  reset();
});
const winPatterns = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let turn = "X";

const reset = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = ``;
    document.querySelector(".reset").classList.remove("hide");
    document.querySelector(".msgContainer").classList.add("hide");
  }
};
const winner = () => {
  document.querySelector(
    ".message"
  ).innerHTML = `Congratulations, Player "${turn}"`;

  document.querySelector(".msgContainer").classList.remove("hide");
  document.querySelector(".reset").classList.add("hide");
  for (let box of boxes) {
    box.disabled = true;
  }
};
const Tie = () => {
  document.querySelector(".message").innerHTML = `It's a Tie`;
  document.querySelector(".msgContainer").classList.remove("hide");
  document.querySelector(".reset").classList.add("hide");
  for (let box of boxes) {
    box.disabled = true;
  }
};

console.log(boxes);
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.innerHTML = `<span class='span'>${turn}</span>`;
    count++;
    for (let pattern of winPatterns) {
      if (
        boxes[pattern[0] - 1].innerText === boxes[pattern[1] - 1].innerText &&
        boxes[pattern[1] - 1].innerText === boxes[pattern[2] - 1].innerText &&
        boxes[pattern[0] - 1].innerText != ""
      ) {
        winner();
        break;
      }
    }
    if (count == 9) {
      Tie();
    }
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
    box.disabled = true;
  });
});
