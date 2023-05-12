const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "C'est une égalité!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "Vous gagnez!";
  } else {
    return "Vous perdez!";
  }
}

const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = computerPlay();
    result.textContent = playRound(playerSelection, computerSelection);
  });
});
