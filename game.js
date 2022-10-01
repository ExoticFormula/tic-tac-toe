let currentTurnBtnClassName = "btn-X";
const resetGame = () => {
  window.location.reload();
};
const checkForWin = () => {
  const cellOneState = extractState(".cell-1", 1);
  const cellTwoState = extractState(".cell-2", 2);
  const cellThreeState = extractState(".cell-3", 3);
  const cellFourState = extractState(".cell-4", 4);
  const cellFiveState = extractState(".cell-5", 5);
  const cellSixState = extractState(".cell-6", 6);
  const cellSevenState = extractState(".cell-7", 7);
  const cellEightState = extractState(".cell-8", 8);
  const cellNineState = extractState(".cell-9", 9);
  compareCells(cellOneState, cellTwoState, cellThreeState);
  compareCells(cellFourState, cellFiveState, cellSixState);
  compareCells(cellSevenState, cellEightState, cellNineState);
  compareCells(cellOneState, cellFourState, cellSevenState);
  compareCells(cellTwoState, cellFiveState, cellEightState);
  compareCells(cellThreeState, cellSixState, cellNineState);
  compareCells(cellOneState, cellFiveState, cellNineState);
  compareCells(cellThreeState, cellFiveState, cellSevenState);
};
const compareCells = (firstState, secondState, thirdState) => {
  if (
    firstState === secondState &&
    firstState === thirdState &&
    firstState != ""
  ) {
    document.querySelector(".game-title").innerText =
      "Player " +
      firstState.substring(firstState.indexOf("-") + 1, firstState.length) +
      " Wins!";
  }
};
const shakeCell = (cell) => {
  cell.classList.add("shaking");

  setTimeout(() => {
    cell.classList.remove("shaking");
  }, 400);
};
const extractState = (cellClassName, index) => {
  return Array.from(document.querySelector(cellClassName).classList)
    .join("")
    .replace("cellcell-" + index, "");
};
const updateCellClassList = (e) => {
  if (Array.from(e.target.classList).length < 3) {
    e.target.classList.add(currentTurnBtnClassName);
  } else {
    shakeCell(e.target);
  }
};
const ToggleCurrentTurnBtnClassName = () => {
  currentTurnBtnClassName =
    currentTurnBtnClassName == "btn-X" ? "btn-O" : "btn-X";
};
window.addEventListener("load", () => {
  console.log("game loaded");
  document.querySelector(".btn-restart").addEventListener("click", resetGame);
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("click", (e) => {
      if (document.querySelector(".game-title").innerText === "Tic Tac Toe") {
        updateCellClassList(e);
        checkForWin();
        ToggleCurrentTurnBtnClassName();
      } else {
        shakeCell(e.target);
      }
    });
  });
});
{
  /* <svg
  class="btn-X"
  x="0px"
  y="0px"
  width="90px"
  height="90px"
  viewBox="0 0 24 24"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  > <line
  x1="18"
  y1="6"
  x2="6"
  y2="18"
  /
  > <line
  x1="6"
  y1="6"
  x2="18"
  y2="18"
  /
  > </svg
  > */
}
