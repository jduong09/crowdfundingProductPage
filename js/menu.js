document.addEventListener('DOMContentLoaded', () => {
  // Header navigation
  const menuHamburger = document.getElementById('menu-hamburger');
  const menuClose = document.getElementById('menu-close');
  const menuList = document.querySelector('.menu-list');
  // Backdrop
  const backdrop = document.querySelector('.backdrop');
  // Main
  const ctaBtn = document.getElementById('btn-cta');
  // Project-Modal
  const projectModal = document.querySelector('.project-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const productModalCheckboxes = document.getElementsByClassName('product-checkbox');

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

  modalCloseBtn.addEventListener('click', () => {
    projectModal.classList.add('hide');
    backdrop.classList.add('hide');
  });

  for (let i = 0; i < productModalCheckboxes.length; i++) {
    const currentCheckbox = productModalCheckboxes[i];
    //currentCheckbox has id named 'checkbox-1'
    currentCheckbox.addEventListener('click', () => {
      const product = document.getElementById(`product-${currentCheckbox.id.substring(9, 10)}`);
      // Add conditional to null any changes if product is empty
      if (product.classList.contains('product-empty')) {
        return;
      }
      // Find div that was already selected and hide pledge.
      const products = document.getElementsByClassName('product selected');
      if (products.length >= 1) {
        const prevSelectedProduct = products[0];
        prevSelectedProduct.classList.remove('selected');
        const pledge = prevSelectedProduct.children.item(prevSelectedProduct.children.length - 1);
        pledge.classList.add('hide');
      }
      // Get div that has class 'selected-pledge' and remove the hide if button is selected
      const selectedPledge = product.children.item(product.children.length - 1);
      product.classList.add('selected');
      selectedPledge.classList.remove('hide');
    });
  }
});