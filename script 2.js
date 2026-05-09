/* ================================================================
   BAD CAST CHARTERS -- script.js
   Minimal JS. Only what is necessary.
   Current functions:
   - Mobile nav toggle (hamburger open/close)
   - Close mobile nav on link click
   ================================================================ */

(function () {

  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!toggle || !navLinks) return;

  // Open / close hamburger menu
  toggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when any nav link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

})();
