//MODAL
//Opens a modal when a project card image is clicked.
//Closes on backdrop click, close button click, or Escape key.

document.addEventListener('DOMContentLoaded', () => {
  const backdrop = document.getElementById('modal-backdrop');

  //Open modal when a card image is clicked.
  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (!modal) return;

      modal.classList.add('open');
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  //Close modal with close button.
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  //Close modal with backdrop click.
  backdrop.addEventListener('click', closeAllModals);

  // Close modal using Escape key.
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAllModals();
  });

  function closeAllModals() {
    document.querySelectorAll('.modal.open').forEach(m => m.classList.remove('open'));
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
});