/**
 * Animate elements
 */
function animate(elements, animateClass, delay) {
  // Sort the elements based on their index in the DOM
  const sortedElements = Array.from(elements).sort(function(a, b) {
    return Array.from(a.parentNode.children).indexOf(a) - Array.from(b.parentNode.children).indexOf(b);
  });

  // Keep track of the index for each element
  let index = 0;

  // Callback function
  function observerCallback(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && !document.body.classList.contains('disable-smooth-scrolling')) {
        entry.target.classList.add(animateClass);
        observer.unobserve(entry.target);
      }
    });
  }

  // Create a single observer instance
  const observer = new IntersectionObserver(function(entries) {
    observerCallback(entries, observer);
  });

  // Observe each element
  sortedElements.forEach(function(el) {
    observer.observe(el);
  });

  // If elements are already in view, trigger the animation immediately
  sortedElements.forEach(function(el) {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      if (el.classList.contains('tag')) {
        setTimeout(function() {
          el.classList.add(animateClass);
        }, delay * index);
        index++;
      } else {
        el.classList.add(animateClass);
      }
    }
  });
}

var elements = Array.prototype.slice.call(document.querySelectorAll(
  '.section-title, .portrait, .section-footer .btn, p, .card, .cv-entry, .cv-section-header, .cv-language, .progress-bar, .tag, .social-item'
));

animate(elements, 'animate', 100);