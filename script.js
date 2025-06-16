// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

function openMenu() {
  navLinks.classList.add('open');
  navOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  navLinks.classList.remove('open');
  navOverlay.classList.remove('active');
  document.body.style.overflow = '';
}
if (hamburger && navLinks && navOverlay) {
  hamburger.addEventListener('click', openMenu);
  hamburger.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') openMenu();
  });
  navOverlay.addEventListener('click', closeMenu);
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  window.addEventListener('resize', function() {
    if (window.innerWidth > 900) closeMenu();
  });
}
