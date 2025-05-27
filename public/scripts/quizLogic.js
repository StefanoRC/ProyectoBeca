document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("quiz");
  const gameId = container.dataset.gameId;
  const scoreToUnlock = parseInt(container.dataset.scoreToUnlock);

  const { games } = await import("../../src/data/games.js");
  const game = games.find(g => g.id === gameId);

  let score = 0;
  let lives = 3;
  let questions = [...game.questions].sort(() => Math.random() - 0.5);
  let currentIndex = 0;

  const render = () => {
    if (score >= scoreToUnlock) {
      unlockGame(gameId);
      container.innerHTML = `
        <h2>🎉 ¡Juego desbloqueado!</h2>
        <a href="/biblioteca">Ir a la Biblioteca</a>
      `;
      return;
    }

    if (lives <= 0) {
      container.innerHTML = `
        <h2>💀 Perdiste. Inténtalo de nuevo.</h2>
        <button onclick="location.reload()">Reiniciar</button>
      `;
      return;
    }

    const question = questions[currentIndex];
    container.innerHTML = `
      <h3>${question.question}</h3>
      <ul>
        ${question.options.map(option => `
          <li><button class="btn option-btn">${option}</button></li>
        `).join("")}
      </ul>
      <p>Puntaje: ${score} | Vidas: ${lives}</p>
    `;

    document.querySelectorAll(".option-btn").forEach(btn => {
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
