```js
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

/* =========================
   LOAD SAVED THEME
========================= */
const saved = localStorage.getItem('theme');
if (saved) {
  document.documentElement.setAttribute('data-theme', saved);
}

/* =========================
   AUTO-CLOSE MOBILE MENU
========================= */
const navMenu = document.getElementById('nav-menu');
const navLinks = navMenu.querySelectorAll('a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navMenu.style.display = 'none';
    }
  });
});

```
