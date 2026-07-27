const cardButtons = document.querySelectorAll(
  '.footer__card-number, .modal__card-number',
);

cardButtons.forEach(button => {
  button.addEventListener('click', async event => {
    const button = event.currentTarget;
    const currentLanguage = localStorage.getItem('language') || 'ua';

    try {
      await navigator.clipboard.writeText(button.dataset.card);

      button.dataset.tooltip =
        translations[currentLanguage]['footer.card.copied'];

      button.classList.add('card-number--copied');

      setTimeout(() => {
        button.classList.remove('card-number--copied');

        setTimeout(() => {
          const activeLanguage = localStorage.getItem('language') || 'ua';

          button.dataset.tooltip =
            translations[activeLanguage]['footer.card.tooltip'];
        }, 200);
      }, 2000);
    } catch {
      button.dataset.tooltip =
        translations[currentLanguage]['footer.card.error'];

      setTimeout(() => {
        const activeLanguage = localStorage.getItem('language') || 'ua';

        button.dataset.tooltip =
          translations[activeLanguage]['footer.card.tooltip'];
      }, 2000);
    }
  });
});
