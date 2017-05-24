(function() {
  //mobile menu
  var menuOpen = document.querySelector(".burger-button"),
      menuMobile = document.querySelector(".main-menu"),
      menuClose = menuMobile.querySelector(".main-menu__button");

  menuMobile.classList.remove("main-menu--no-js");

  menuOpen.addEventListener("click", function(event) {
    event.preventDefault();
    menuMobile.classList.add("main-menu__modal-content-show");
  });

  menuClose.addEventListener("click", function(event) {
    event.preventDefault();
    menuMobile.classList.remove("main-menu__modal-content-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (menuMobile.classList.contains("main-menu__modal-content-show")) {
        menuMobile.classList.remove("main-menu__modal-content-show");
      }
    }
  });

  //toggle slider
  var inApp = document.getElementById('app-js'),
      onSite = document.getElementById('site-js'),
      viewInapp2 = document.querySelector('.promo-section__features-block--application'),
      viewOnsite1 = document.querySelector('.promo-section__features-block--site'),
      selectedApp = document.querySelector('.promo-section__toggle-button--app'),
      selectedSite = document.querySelector('.promo-section__toggle-button--site'),
      input = document.querySelectorAll('input');

  for (var i = 0; i < input.length; i++) {
    input[i].onchange = function() {
      if (onSite.checked) {
        viewOnsite1.style.display = 'flex';
        viewInapp2.style.display = 'none';
        event.preventDefault();
        selectedSite.classList.add("promo-section__toggle-button--checked");
        selectedApp.classList.remove("promo-section__toggle-button--checked");
      } else if (inApp.checked) {
        viewOnsite1.style.display = 'none';
        viewInapp2.style.display = 'flex';
        event.preventDefault();
        selectedApp.classList.add("promo-section__toggle-button--checked");
        selectedSite.classList.remove("promo-section__toggle-button--checked");
      };
    };
  };
})();
