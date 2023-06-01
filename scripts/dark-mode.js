/**
 * Dark Mode Toggle
 */
var darkModeToggle = document.getElementById('darkModeToggle');

// Check if dark mode preference is stored in sessionStorage
var isDarkMode = sessionStorage.getItem('darkMode') === 'true';

// Set initial dark mode state based on sessionStorage
if (isDarkMode) {
  document.body.classList.add('dark-mode');
  darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('change', function() {
  if (darkModeToggle.checked) {
    document.body.classList.add('dark-mode');
    sessionStorage.setItem('darkMode', 'true');
  } else {
    document.body.classList.remove('dark-mode');
    sessionStorage.setItem('darkMode', 'false');
  }
});
