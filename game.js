const resetGame = () => {
  window.location.reload();
};
let currentTurnBtnClassName = "btn-X";

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
  if (checkDraw() == true) {
    document.querySelector(".game-title").innerText = "Draw";
    return;
  } else {
    compareCells(cellOneState, cellTwoState, cellThreeState);
    compareCells(cellFourState, cellFiveState, cellSixState);
    compareCells(cellSevenState, cellEightState, cellNineState);
    compareCells(cellOneState, cellFourState, cellSevenState);
    compareCells(cellTwoState, cellFiveState, cellEightState);
    compareCells(cellThreeState, cellSixState, cellNineState);
    compareCells(cellOneState, cellFiveState, cellNineState);
    compareCells(cellThreeState, cellFiveState, cellSevenState);
  }
};

const checkDraw = () => {
  return Array.from(document.querySelectorAll(".cell")).every((cell) => {
    return cell.classList.contains("btn-X") || cell.classList.contains("btn-O");
  });
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

if (e.target.nodeName !== "DIV") 
e = e.target.parentElement;
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
  if (
    !(
      e.target.classList.contains(".btn-X") ||
      e.target.classList.contains(".btn-O")
    ) &&
    e.target.nodeName === "DIV"
  ) {
    e.target.classList.add(currentTurnBtnClassName);
    if (currentTurnBtnClassName == "btn-X") {
      e.target.innerHTML = `
        <svg
        
                class="btn-X-icon"
                x="0px"
                y="0px"
                width="90px"
                height="90px"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <line x1="18" y1="6" x2="6" y2="18" />
                {" "}
                <line x1="6" y1="6" x2="18" y2="18" />
                {" "}
              </svg>
       `;
    } else {
      e.target.innerHTML = `
      <svg
      x="0px"
      y="0px"
      width="60px"
      height="60px"
      x="0"
      y="0"
      class="btn-O-icon"

   
      viewBox="0 0 28 28"
    >
      <path d="M13.917 0C6.244 0 .001 6.243.001 13.918c0 7.673 6.243 13.916 13.916 13.916s13.916-6.243 13.916-13.916C27.833 6.243 21.59 0 13.917 0zm0 24.834c-6.021 0-10.916-4.896-10.916-10.916C3.001 7.897 7.897 3 13.917 3c6.02 0 10.916 4.896 10.916 10.918 0 6.02-4.896 10.916-10.916 10.916z"></path>
    </svg>
       `;
    }
  } else {
    shakeCell(e.target);
    
  }
};

const toggleCurrentTurnBtnClassName = () => {
  currentTurnBtnClassName =
    currentTurnBtnClassName == "btn-X" ? "btn-O" : "btn-X";
};
window.addEventListener("load", () => {
  console.log("game loaded");
  document.querySelector(".btn-restart").addEventListener("click", resetGame);
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("click", (e) => {
if (
    !(
      e.target.classList.contains(".btn-X") ||
      e.target.classList.contains(".btn-O")
    ) &&
    e.target.nodeName === "DIV"&&
document.querySelector(".game-title").innerText === "Tic Tac Toe"
  )
      {
        updateCellClassList(e);
        checkForWin();
        toggleCurrentTurnBtnClassName();
      } else {
        shakeCell(e.target);
      }
    });
  });
});
