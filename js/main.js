document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
  document.querySelector('.project')?.scrollIntoView({ behavior: 'smooth' });
});
