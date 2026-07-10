const form = document.querySelector('.footer__form');
const button = document.querySelector('.footer__submit-btn');
const buttonText = document.querySelector('.footer__submit-btn-text');

form.addEventListener('submit', event => {
  event.preventDefault();

  buttonText.textContent = 'Надіслано';
  button.classList.add('footer__submit-btn--sent');

  setTimeout(() => {
    buttonText.textContent = 'Надіслати';
    button.classList.remove('footer__submit-btn--sent');
  }, 3000);
});
const cardNumber = document.querySelector('.footer__card-number');

cardNumber.addEventListener('click', async () => {
  await navigator.clipboard.writeText(cardNumber.dataset.card);
});
