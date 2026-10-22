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

  while (playerScore < winningScore && computerScore < winningScore) {
    const playerSelection = getPlayerChoice();

    if (playerSelection === null) {
      alert("Game cancelled.");
      console.log("Game cancelled.");
      return;
    }

    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);

    let roundMessage;

    if (roundResult === "player") {
      playerScore += 1;
      roundMessage = "You win this round!";
    } else if (roundResult === "computer") {
      computerScore += 1;
      roundMessage = "The computer wins this round!";
    } else {
      roundMessage = "It's a draw. No points awarded.";
    }

    const roundSummary =
      `You chose ${playerSelection}.\n` +
      `Computer chose ${computerSelection}.\n\n` +
      `${roundMessage}\n` +
      `Player: ${playerScore} | Computer: ${computerScore}`;

    alert(roundSummary);
    console.log(roundSummary);
  }

  let winnerMessage;

  if (playerScore === winningScore) {
    winnerMessage = "You win the match!";
  } else {
    winnerMessage = "The computer wins the match!";
  }

  const finalSummary =
    `${winnerMessage}\n\n` +
    `Final score: Player ${playerScore} | Computer ${computerScore}`;

  alert(finalSummary);
  console.log(finalSummary);
}

// During development, run game() in the browser console to test a match.
// TODO: Start game() on page load once the remaining functions are integrated.
