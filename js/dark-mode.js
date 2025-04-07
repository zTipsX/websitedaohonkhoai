// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  
  // Save preference to localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
    document.querySelector('.dark-mode-toggle i').textContent = '🌙';
  } else {
    localStorage.setItem('darkMode', 'disabled');
    document.querySelector('.dark-mode-toggle i').textContent = '☀️';
  }
}

// Function to check if dark mode is enabled
function checkDarkMode() {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    if (document.querySelector('.dark-mode-toggle i')) {
      document.querySelector('.dark-mode-toggle i').textContent = '🌙';
    }
  }
}

// Create and add the toggle button
function createDarkModeToggle() {
  const button = document.createElement('button');
  button.className = 'dark-mode-toggle';
  button.innerHTML = '<i>☀️</i>';
  button.setAttribute('aria-label', 'Chuyển đổi chế độ tối');
  button.addEventListener('click', toggleDarkMode);
  
  // Thêm nút vào trước menu điều hướng
  const nav = document.querySelector('nav ul');
  if (nav) {
    nav.parentNode.insertBefore(button, nav);
  }
}

// Initialize dark mode
document.addEventListener('DOMContentLoaded', () => {
  checkDarkMode();
  createDarkModeToggle();
});