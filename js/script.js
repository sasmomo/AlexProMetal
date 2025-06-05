const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');
const hero_content = document.querySelector('.hero-content');
// Gestion du clic sur le burger
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('open');
  hero_content.classList.toggle('burger-opened');
});

// Fermeture auto du menu quand on clique sur un lien
navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    burger.classList.remove('open');
  });
});

// changement de couleur du lien de la page actuelle dans la nav bar //

  const currentPath = window.location.pathname.split('/').pop(); 
  navItems.forEach(link => {
    const linkPath = link.getAttribute('href');

    // Comparer le lien à l'URL actuelle
    if (linkPath === currentPath || (linkPath === 'index.html' && currentPath === '')) {
      link.classList.add('active');
    }
  });
