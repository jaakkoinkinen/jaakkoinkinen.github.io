window.onload = function() {
  // Add a class to the body temporarily to disable smooth scrolling
  document.body.classList.add('disable-smooth-scrolling');

  // Scroll to the top of the page
  window.scrollTo(0, 0);

  // Remove the class after a short delay (adjust the delay as needed)
  setTimeout(function() {
    document.body.classList.remove('disable-smooth-scrolling');
  }, 500); // Delay in milliseconds
};

/**
 * Hide navbar on scroll
 */
var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  var body = document.querySelector('body');
  var navbar = document.querySelector('.navbar');
  var navbarCollapse = document.getElementById('navbarSupportedContent');
  var currentScrollPos = window.pageYOffset;

  // Do not hide if a menu is open
  if (!navbarCollapse.classList.contains('show')) {
    if (prevScrollPos > currentScrollPos) {
      navbar.classList.remove('hide');
      body.classList.add('navbar-is-visible');
    } else {
      navbar.classList.add('hide');
      body.classList.remove('navbar-is-visible');
    }
    prevScrollPos = currentScrollPos;
  }
};

/**
 * Close the navbar menu when a nav-link is clicked
 */
var navbarToggler = document.querySelector('.navbar-toggler');
var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function() {
    if (navbarToggler.getAttribute('aria-expanded') === 'true') {
      navbarToggler.click();
    }
  });
});


/**
 * Add class to navbar when menu is open
 */
document.addEventListener('DOMContentLoaded', function() {
  var navbarToggler = document.querySelector('.navbar-toggler');

  navbarToggler.addEventListener('click', function() {
    if (!navbarToggler.classList.contains('collapsed')) {
      document.querySelector('.navbar').classList.add('menu-open');
    } else {
      document.querySelector('.navbar').classList.remove('menu-open');
    }
  });
});

//  Activate Bootstrap scrollspy on the main nav element
const mainNav = document.body.querySelector('.navbar');
if (mainNav) {
  new bootstrap.ScrollSpy(document.body, {
    target: '.navbar',
    rootMargin: '0px 0px -40%',
  });
};



// Attach a click event listener to all anchor elements on the page
var anchorElements = document.querySelectorAll('a');
Array.prototype.forEach.call(anchorElements, function(element) {
  element.addEventListener('click', function(event) {
    var href = this.getAttribute('href');

    // Check if the link is a hash link
    if (href && href.indexOf('#') === 0) {
      // Prevent the default anchor behavior
      event.preventDefault();

      // Scroll to the target element if it exists on the page
      var targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView(true);
      }
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var scrollLinks = document.querySelectorAll('.scroll-link');
  
  // Attach click event listener to scroll links
  Array.prototype.forEach.call(scrollLinks, function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      
      // Scroll to the target element with easing effect
      if (target) {
        var targetPosition = target.offsetTop;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
