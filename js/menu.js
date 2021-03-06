document.addEventListener('DOMContentLoaded', () => {
  // Header navigation
  const menuHamburger = document.getElementById('menu-hamburger');
  const menuClose = document.getElementById('menu-close');
  const menuList = document.querySelector('.menu-list');
  // Backdrop
  const backdrop = document.querySelector('.backdrop');
  // Main
  const ctaBtn = document.getElementById('btn-cta');
  const bookmarkBtn = document.getElementById('btn-bookmark');
  const bookmarkInput = document.getElementById('input-bookmark');
  const confirmBtns = document.getElementsByClassName('product-confirm');
  // Project-Modal
  const projectModal = document.querySelector('.project-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const productModalHeaders = document.getElementsByClassName('product-header');
  const pledgeSubmitBtns = document.getElementsByClassName('pledge-submit');
  const selectedProducts = document.getElementsByClassName('product selected');
  // Modal-success
  const successModal = document.getElementById('modal-success');
  const successModalBtn = document.getElementById('button-modal-close');

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

  bookmarkBtn.addEventListener('click', () => {
    if (bookmarkBtn.classList.contains('bookmarked')) {
      bookmarkBtn.classList.remove('bookmarked');
      bookmarkInput.classList.remove('bookmarked');
    } else {
      bookmarkBtn.classList.add('bookmarked');
      bookmarkInput.classList.add('bookmarked');
    }
  });

  for (let k = 0; k < confirmBtns.length; k++) {
    const btn = confirmBtns[k];
    // list item is product-list
    btn.addEventListener('click', () => {
      // need to find project-modal-list-item
      // we know that the first item in the modal is to pledge with no reward
      const modalListItem = document.getElementById(`product-${k + 2}`);
      modalListItem.classList.add('selected');
      const selectedPledge = modalListItem.children.item(modalListItem.children.length - 1);
      selectedPledge.classList.remove('hide');
      projectModal.classList.remove('hide');
      backdrop.classList.remove('hide');
    });
  };

  modalCloseBtn.addEventListener('click', () => {
    projectModal.classList.add('hide');
    backdrop.classList.add('hide');

    for (let i = 0; i < selectedProducts.length; i++) {
      selectedProducts[i].children.item(selectedProducts[i].children.length - 1).classList.add('hide');
      selectedProducts[i].classList.remove('selected');
    }
  });

  for (let i = 0; i < productModalHeaders.length; i++) {
    const currentCheckbox = productModalHeaders[i];
    //currentCheckbox has id named 'checkbox-1'
    currentCheckbox.addEventListener('click', () => {
      const product = document.getElementById(`product-${currentCheckbox.id.substring(15, 16)}`);
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

    for (let j = 0; j < pledgeSubmitBtns.length; j++) {
      const submitBtn = pledgeSubmitBtns[j];
      submitBtn.addEventListener('click', () => {
        projectModal.classList.add('hide');
        successModal.classList.remove('hide');
      });
    }

    successModalBtn.addEventListener('click', () => {
      successModal.classList.add('hide');
      backdrop.classList.add('hide');
    });

    if (window.innerWidth >= '576') {
      menuHamburger.classList.add('hide');
      menuList.classList.remove('hide');
      bookmarkInput.classList.remove('hide');
    }

    if (window.innerWidth >= '992') {
      bookmarkInput.classList.remove('hide');
    } else {
      bookmarkInput.classList.add('hide');
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth >= '576') {
        menuHamburger.classList.add('hide');
        menuList.classList.remove('hide');
      } else {
        menuHamburger.classList.remove('hide');
        menuList.classList.add('hide');
      }

      if (window.innerWidth >= '992') {
        bookmarkInput.classList.remove('hide');
      } else {
        bookmarkInput.classList.add('hide');
      }
    })
  }
});