//NAVIGATION COMPONENT
//Puts the nav onto every page and handles active state.

const navHTML = `
<header class="site-header">
  <nav class="nav">
    <a href="index.html" class="nav-logo">Sabrina Harron</a>

    <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>

    <button class="theme-toggle">☾ Dark</button>
  </nav>
</header>
`;

//Add nav at the top of the body.
document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  //Active state.
  //Compares current page URL to each nav link and highlights the match.
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

  //Mobile hamburger menu
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  //Close menu when a link is clicked.
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
});