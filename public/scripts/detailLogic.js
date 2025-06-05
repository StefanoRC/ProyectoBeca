const unlockedGames = JSON.parse(localStorage.getItem('unlockedGames')) || [];

const gameSection = document.querySelector(".game-section");
const currentGameId = gameSection.dataset.gameId;
const lockedMessage = document.querySelector(".locked-message");

if (!unlockedGames.includes(currentGameId)) {
  gameSection.style.display = "none";
  lockedMessage.style.display = "block";
}
