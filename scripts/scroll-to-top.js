/**
 * Hide or show "scroll to top" button
 */
window.addEventListener('scroll', function() {
  var element = document.querySelector('.scroll-to-top');
  var scrollPosition = window.scrollY || window.pageYOffset;
  var scrollThreshold = 1000;

  if (scrollPosition > scrollThreshold) {
    element.classList.remove('hide');
    element.classList.add('show');
  } else {
    element.classList.remove('show');
    element.classList.add('hide');
  }
});
