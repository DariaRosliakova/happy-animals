const teamSwiper = new Swiper('.team-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: '.carousel-btn.next',
    prevEl: '.carousel-btn.prev',
  },
});
