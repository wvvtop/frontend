document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.navbar__toggle');
  const menu = document.querySelector('.navbar__menu');

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
});
