const form = document.querySelector('.footer__form');
const submitButton = document.querySelector('.footer__submit-btn');
const submitButtonText = document.querySelector('.footer__submit-btn-text');

form.addEventListener('submit', event => {
  event.preventDefault();

  const currentLanguage = localStorage.getItem('language') || 'ua';

  submitButtonText.textContent =
    translations[currentLanguage]['footer.form.sent'];

  submitButton.classList.add('footer__submit-btn--sent');

  setTimeout(() => {
    const activeLanguage = localStorage.getItem('language') || 'ua';

    submitButtonText.textContent =
      translations[activeLanguage]['footer.form.submit'];

    submitButton.classList.remove('footer__submit-btn--sent');
  }, 3000);
});
