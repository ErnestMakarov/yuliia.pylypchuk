document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.innerHTML = `<img src="${img.src}" alt="${img.alt}" class="modal-img">`;
      document.body.appendChild(modal);

      modal.addEventListener('click', () => {
        modal.remove();
      });
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const modal = document.querySelector('.modal');
      if (modal) {
        modal.remove();
      }
    }
  });
});
