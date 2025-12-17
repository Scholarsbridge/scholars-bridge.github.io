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


const saved = localStorage.getItem('theme');
if (saved) document.documentElement.setAttribute('data-theme', saved);
```
