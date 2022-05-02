document.addEventListener('DOMContentLoaded', () => {
  // Header navigation
  const menuHamburger = document.getElementById('menu-hamburger');
  const menuClose = document.getElementById('menu-close');
  const menuList = document.querySelector('.menu-list');
  // Backdrop
  const backdrop = document.querySelector('.backdrop');
  // Main
  const ctaBtn = document.getElementById('btn-cta');
  

  menuHamburger.addEventListener('click', () => {
    menuHamburger.classList.add('hide');
    menuClose.classList.remove('hide');
    menuList.classList.remove('hide');
    backdrop.classList.remove('hide');
  });

  menuClose.addEventListener('click', () => {
    menuHamburger.classList.remove('hide');
    menuClose.classList.add('hide');
    menuList.classList.add('hide');
    backdrop.classList.add('hide');
  });

  ctaBtn.addEventListener('click', () => {
    const projectModal = document.querySelector('.project-modal');
    projectModal.classList.remove('hide');
    backdrop.classList.remove('hide');
  });
});