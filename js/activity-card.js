const activityCards = document.querySelectorAll('.activity-card');

activityCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
});
