const unlockedGames = JSON.parse(localStorage.getItem('unlockedGames')) || [];

const gameSection = document.getElementById("game-section");
const currentGameId = gameSection.dataset.gameId;
const lockedMessage = document.getElementById("locked-message");

if (!unlockedGames.includes(currentGameId)) {
  gameSection.style.display = "none";
  lockedMessage.style.display = "block";
}
