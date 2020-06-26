(function () {
  "use scrict";
  const sections = Array.prototype.slice.call(document.querySelectorAll("div[data-section-id]"), 0)
    .map(el => ({ id: el.dataset.sectionId, offset: el.offsetTop }));

  function initBurger() {
    Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0).forEach(el =>
      el.addEventListener('click', () => {
        el.classList.toggle('is-active');
        document.getElementById(el.dataset.target).classList.toggle('is-active');
      })
    );
  }

  function scrollSpy() {
    const position = document.documentElement.scrollTop || document.body.scrollTop;
    sections
      .filter(section => section.offset <= position)
      .forEach(section => {
        this.document.querySelector("a[data-section-id].is-active")?.classList.remove('is-active');
        this.document.querySelector(`a[data-section-id=${section.id}]`)?.classList.add('is-active');
      })
  }

  document.addEventListener('DOMContentLoaded', () => {
    initBurger();
  });

  window.onscroll = scrollSpy

})();