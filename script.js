// Toggle Theme
const themeToggle = document.getElementById('themeToggle');
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Load saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(savedTheme);

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');

  const currentTheme = document.body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
});

// Scroll to Top Button
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
