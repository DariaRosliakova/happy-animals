const activityCards = document.querySelectorAll('.activity-card');

activityCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
});
function resetHiddenFlippedCards(swiper) {
  swiper.slides.forEach(slide => {
    if (!slide.classList.contains('swiper-slide-visible')) {
      slide.querySelector('.activity-card')?.classList.remove('is-flipped');
    }
  });
}
