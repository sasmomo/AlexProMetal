const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// Gestion du clic sur le burger
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('open');
});

// Fermeture auto du menu quand on clique sur un lien
navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    burger.classList.remove('open');
  });
});