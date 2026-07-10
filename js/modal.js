const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => {
  modal.classList.toggle('is-hidden');
  document.documentElement.classList.toggle('no-scroll');
};

modalBtnOpen.forEach(btn => {
  btn.addEventListener('click', toggleModal);
});

modalBtnClose.addEventListener('click', toggleModal);
