let currentTurnBtnClassName = "btn-X";

window.addEventListener("load", () => {
  console.log("game loaded");

  document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("click", (e) => {
      console.log(currentTurnBtnClassName);
      updateCellClassList(e);
      ToggleCurrentTurnBtnClassName();
    });
  });
});

function updateCellClassList(e) {
  if (Array.from(e.target.classList).length < 2) {
    e.target.classList.add(currentTurnBtnClassName);
  }
  console.log(e.target);
}

function ToggleCurrentTurnBtnClassName() {
  currentTurnBtnClassName =
    currentTurnBtnClassName == "btn-X" ? "btn-O" : "btn-X";
}

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
