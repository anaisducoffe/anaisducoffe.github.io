window.addEventListener("DOMContentLoaded", () => {
  const flipCard = document.getElementById("flip-card");
  flipCard.addEventListener("touchend", () => {
    flipCard.classList.toggle("flipped");
  });
});
