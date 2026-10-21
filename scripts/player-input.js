/* exported computerPlay, getPlayerChoice */

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);

  return choices[randomIndex];
}

function getPlayerChoice() {
  while (true) {
    const choice = prompt("Choose Rock, Paper, or Scissors:");

    if (choice === null) {
      return null;
    }

    const answer = choice.trim().toLowerCase();

    if (answer === "rock") return "Rock";
    if (answer === "paper") return "Paper";
    if (answer === "scissors") return "Scissors";

    alert("Invalid choice. Please try again.");
  }
}
