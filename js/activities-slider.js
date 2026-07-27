const activitiesMedia = window.matchMedia('(max-width: 1199px)');

let activitiesSwiper = null;

function initActivitiesSwiper() {
  if (activitiesMedia.matches && !activitiesSwiper) {
    activitiesSwiper = new Swiper('.activities-swiper', {
      slidesPerView: 1,
      spaceBetween: 16,
      watchSlidesProgress: true,
      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 60,
        },
      },

      pagination: {
        el: '.pagination',
        bulletClass: 'pagination__button',
        bulletActiveClass: 'pagination__button--active',
        clickable: true,
      },

      navigation: false,
      on: {
        progress(swiper) {
          swiper.slides.forEach(slide => {
            if (!slide.classList.contains('swiper-slide-visible')) {
              slide
                .querySelector('.activity-card')
                ?.classList.remove('is-flipped');
            }
          });
        },
      },
    });
  }

  if (!activitiesMedia.matches && activitiesSwiper) {
    activitiesSwiper.destroy(true, true);
    activitiesSwiper = null;
  }
}

initActivitiesSwiper();

activitiesMedia.addEventListener('change', initActivitiesSwiper);
