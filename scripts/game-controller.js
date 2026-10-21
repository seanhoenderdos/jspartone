/* exported game */

function game() {
  let playerScore = 0;
  let computerScore = 0;
  const winningScore = 3;
  const rules = `First to ${winningScore} wins. Draws do not award points.`;

  alert(
    "Welcome to Rock Paper Scissors!\n\n" +
      `${rules}\n\n` +
      "When prompted, enter Rock, Paper or Scissors.\n" +
      "Press Cancel in the choice prompt to end the game.",
  );

  console.log("Rock Paper Scissors");
  console.log(rules);
  console.log(`Player: ${playerScore} | Computer: ${computerScore}`);

  const playerSelection = getPlayerChoice();

  if (playerSelection === null) {
    alert("Game cancelled.");
    console.log("Game cancelled.");
    return;
  }

  console.log(`Player chose ${playerSelection}.`);

  // TODO: Loop until the player or computer has won three rounds.
  // TODO: Get the computer's choice and call playRound() with both choices.
  // TODO: Update the correct score; draws award no points.
  // TODO: Show each round's result and scores with alert() and console.log().
  // TODO: Announce the final winner with alert() and console.log().
}

// During development, run game() in the browser console to check the match setup.
// TODO: Start game() on page load once the remaining functions are integrated.
