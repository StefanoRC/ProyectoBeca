document.addEventListener("DOMContentLoaded", async () => {
  const container = document.querySelector(".game-quiz__content");
  const gameId = container.dataset.gameId;
  const scoreToUnlock = parseInt(container.dataset.scoreToUnlock);

  const { games } = await import("../../src/data/games.js");
  const game = games.find(g => g.id === gameId);

  const unlocked = JSON.parse(localStorage.getItem("unlockedGames") || "[]");
  if (unlocked.includes(gameId)) {
    container.innerHTML = `
      <h2>✅ Ya desbloqueaste este juego.</h2>
      <a href="/${game.idalt}">Ir a los detalles del juego</a>
    `;
    return;
  }



  let score = 0;
  let lives = 3;
  let questions = [...game.questions].sort(() => Math.random() - 0.5);
  let currentIndex = 0;

  const render = () => {
    if (score >= scoreToUnlock) {
      unlockGame(gameId);
      container.innerHTML = `
        <h2 class="game-quiz__title">🎉 ¡Juego desbloqueado!</h2>
        <a href="/${game.idalt}">Ir a los detalles del juego</a>
      `;
      return;
    }

    if (lives <= 0) {
      container.innerHTML = `
        <h2 class="game-quiz__game-over">💀 Perdiste. Inténtalo de nuevo.</h2>
        <button class="game-quiz__restart-button btn btn-secondary" onclick="location.reload()">Reiniciar</button>
      `;
      return;
    }

    const question = questions[currentIndex];
    container.innerHTML = `
      <h3 class="game-quiz__question">${question.question}</h3>
      <div class="game-quiz__options">
        ${question.options.map(option => `
        <button class="game-quiz__option btn">${option}</button>
        `).join("")}
      </div>
      <p>Puntaje: ${score} | Vidas: ${lives}</p>
    `;

    document.querySelectorAll(".game-quiz__option").forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.textContent === question.answer) {
          score++;
        } else {
          lives--;
        }

        currentIndex++;
        if (currentIndex >= questions.length) {
          currentIndex = 0;
          questions = [...game.questions].sort(() => Math.random() - 0.5);
        }

        render();
      });
    });
  };

  render();
});

function unlockGame(id) {
  const unlocked = JSON.parse(localStorage.getItem("unlockedGames") || "[]");
  if (!unlocked.includes(id)) {
    unlocked.push(id);
    localStorage.setItem("unlockedGames", JSON.stringify(unlocked));
  }
}
