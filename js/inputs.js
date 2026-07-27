const textarea = document.querySelector('.footer__textarea');
const field = textarea.closest('.footer__field');
textarea.addEventListener('input', () => {
  const maxHeight = parseInt(
    getComputedStyle(textarea).getPropertyValue('--max-height'),
  );

  textarea.style.height = 'auto';
  textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + 'px';
});
function updateTextarea() {
  const maxHeight = parseInt(
    getComputedStyle(textarea).getPropertyValue('--max-height'),
  );

  textarea.style.height = 'auto';
  textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;

  field.classList.toggle('footer__field--filled', textarea.value.trim() !== '');
}

textarea.addEventListener('input', updateTextarea);

updateTextarea();
