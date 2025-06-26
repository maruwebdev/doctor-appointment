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

// Smooth scroll to footer social links when Contact is clicked
const contactLinks = document.querySelectorAll('a[href="#footer-social"]');
contactLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const social = document.getElementById('footer-social');
        if (social) {
            social.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});

// Section scroll animation
function revealSections() {
  const sections = document.querySelectorAll('.feature-section');
  const trigger = window.innerHeight * 0.85;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < trigger) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);

// Animate doctor cards on scroll
function revealDoctorCards() {
  const cards = document.querySelectorAll('.doctor-card');
  const trigger = window.innerHeight * 0.92;
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < trigger) {
      card.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealDoctorCards);
window.addEventListener('DOMContentLoaded', revealDoctorCards);
