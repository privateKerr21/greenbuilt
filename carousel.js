// carousel.js — hero background photo carousel
(function () {
  var slides = document.querySelectorAll('.hero-slide');
  if (!slides.length) return;

  var current = 0;
  var interval = 5000;   // ms between slides
  var duration = 800;    // matches CSS transition

  function advance() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }

  // Start after first interval
  setInterval(advance, interval);
})();
