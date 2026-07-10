const cards = document.querySelectorAll('.help-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
});
