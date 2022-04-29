document.addEventListener('DOMContentLoaded', () => {
  const menuHamburger = document.getElementById('menu-hamburger');
  const menuClose = document.getElementById('menu-close');
  const menuList = document.querySelector('.menu-list');
  const backdrop = document.querySelector('.backdrop');

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
});