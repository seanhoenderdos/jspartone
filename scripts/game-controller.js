function game() {
  const winningScore = 3;
  const choiceEmojis = {
    Rock: "🪨",
    Paper: "📄",
    Scissors: "✂️",
  };
  const rules = `🎯 First to ${winningScore} wins. 🤝 Draws do not award points.`;

  alert(
    "👋 Welcome to Rock Paper Scissors!\n\n" +
      "🪨 Rock | 📄 Paper | ✂️ Scissors\n\n" +
      `${rules}\n\n` +
      "Everything you need appears in these dialogs.\n" +
      "You do not need to open the browser console.\n\n" +
      "When prompted, enter Rock, Paper or Scissors.\n" +
      "Press Cancel in the choice prompt to stop playing.",
  );

  console.log("🪨 Rock | 📄 Paper | ✂️ Scissors");
  console.log(rules);

  let playAgain = true;

  while (playAgain) {
    let playerScore = 0;
    let computerScore = 0;

    console.log(`👤 Player: ${playerScore} | 🤖 Computer: ${computerScore}`);

    while (playerScore < winningScore && computerScore < winningScore) {
      const playerSelection = getPlayerChoice();

      if (playerSelection === null) {
        const cancellationMessage =
          "🛑 Game cancelled.\n\n🔄 Refresh the page to play again.";

        alert(cancellationMessage);
        console.log(cancellationMessage);
        return;
      }

      const computerSelection = computerPlay();
      const roundResult = playRound(playerSelection, computerSelection);

      let roundMessage;

      if (roundResult === "player") {
        playerScore += 1;
        roundMessage = "🎉 You win this round!";
      } else if (roundResult === "computer") {
        computerScore += 1;
        roundMessage = "🤖 The computer wins this round!";
      } else {
        roundMessage = "🤝 It's a draw. No points awarded.";
      }

      const roundSummary =
        `You chose ${choiceEmojis[playerSelection]} ${playerSelection}.\n` +
        `Computer chose ${choiceEmojis[computerSelection]} ${computerSelection}.\n\n` +
        `${roundMessage}\n` +
        `👤 Player: ${playerScore} | 🤖 Computer: ${computerScore}`;

      alert(roundSummary);
      console.log(roundSummary);
    }

    let winnerMessage;

    if (playerScore === winningScore) {
      winnerMessage = "You win the match! 🎉";
    } else {
      winnerMessage = "🤖 The computer wins the match!";
    }

    const finalSummary =
      `${winnerMessage}\n\n` +
      `📊 Final score: 👤 Player ${playerScore} | 🤖 Computer ${computerScore}`;

    alert(finalSummary);
    console.log(finalSummary);

    playAgain = confirm(
      "🔄 Play another match?\n\n" +
        "Click OK to reset both scores and play again, or Cancel to finish.",
    );
  }

  const goodbyeMessage =
    "👋 Thanks for playing!\n\n🔄 Refresh the page to play again.";

  alert(goodbyeMessage);
  console.log(goodbyeMessage);
}

game();
