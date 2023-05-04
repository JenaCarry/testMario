const clouds = document.querySelector(".clouds");
const pipe = document.querySelector(".pipe");
const mario = document.querySelector(".mario");
const score = document.querySelector(".score");

let interval = null;
let playerScore = 0;

const scoreCounter = () => {
  playerScore++;
  score.innerHTML = playerScore;
};

// Start Game
addEventListener("keydown", (start) => {
  if (start.key === " ") {
    clouds.classList.add("clouds-animation");
    pipe.classList.add("pipe-animation");
    let playerScore = 0;
    interval = setInterval(scoreCounter, 500);
  }
});

// Jump
addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    mario.classList.add("mario-animation");
    setTimeout(() => {
      mario.classList.remove("mario-animation");
    }, 500);
  }
});

const loop = setInterval(() => {
  const cloudsPosition = clouds.offsetLeft;
  const pipePosition = pipe.offsetLeft;
  const marioPosition = Number(
    window.getComputedStyle(mario).bottom.replace("px", "")
  );

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;
    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
    mario.src = "assets/images/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";
    clouds.style.left = `${cloudsPosition}px`;
    clearInterval(interval);
    clearInterval(loop);
  }
}, 10);
