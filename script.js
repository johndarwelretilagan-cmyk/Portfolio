// script.js — Shared JS for all pages

// ── Inject nav ────────────────────────────────────────────────
(function () {
  const pages = [
    { href: 'index.html',        label: 'Home' },
    { href: 'about.html',        label: 'About' },
    { href: 'skills.html',       label: 'Skills' },
    { href: 'projects.html',     label: 'Projects' },
    { href: 'hobbies.html',      label: 'Hobbies' },
    { href: 'education.html',    label: 'Education' },
    { href: 'achievements.html', label: 'Awards' },
    { href: 'gallery.html',      label: 'Gallery' },
    { href: 'resume.html',       label: 'Resume' },
    { href: 'contact.html',      label: 'Contact' },
  ];

  const current = location.pathname.split('/').pop() || 'index.html';

  const links = pages
    .map(p => `<a href="${p.href}"${current === p.href ? ' class="active"' : ''}>${p.label}</a>`)
    .join('');

  document.getElementById('nav-placeholder').innerHTML = `
    <nav>
      <a class="nav-logo" href="index.html">YN.</a>
      <div class="nav-links" id="navLinks">${links}</div>
      <button class="hamburger" id="hamburger" onclick="toggleMenu()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>`;
})();

// ── Mobile hamburger ─────────────────────────────────────────
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ── Gallery filter ────────────────────────────────────────────
function filterGallery(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.style.display = (cat === 'all' || item.dataset.cat === cat) ? '' : 'none';
  });
}

// ── Contact form (demo) ───────────────────────────────────────
function submitForm() {
  const name    = document.getElementById('cfName').value.trim();
  const email   = document.getElementById('cfEmail').value.trim();
  const message = document.getElementById('cfMsg').value.trim();
  if (!name || !email || !message) {
    alert('Please fill in your name, email, and message.');
    return;
  }
  const success = document.getElementById('formSuccess');
  success.style.display = 'block';
  setTimeout(() => { success.style.display = 'none'; }, 5000);
  document.getElementById('cfName').value    = '';
  document.getElementById('cfEmail').value   = '';
  document.getElementById('cfSubject').value = '';
  document.getElementById('cfMsg').value     = '';
}

// ── Footer year ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
