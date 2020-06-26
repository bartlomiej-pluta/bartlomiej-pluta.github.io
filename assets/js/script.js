(function () {
  "use scrict";

  function initBurger() {
    Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0).forEach(el =>
      el.addEventListener('click', () => {              
        el.classList.toggle('is-active');
        document.getElementById(el.dataset.target).classList.toggle('is-active');
      })
    );
  }

  document.addEventListener('DOMContentLoaded', () => {
    initBurger();
  });

})();