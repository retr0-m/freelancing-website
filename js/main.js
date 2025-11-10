// main.js - small interactions
document.addEventListener('DOMContentLoaded', function () {
  // nav toggle for mobile
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');
  const hamburger = document.querySelector('.nav-toggle .hamburger');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      if (navList) navList.classList.toggle('show');
      hamburger.classList.toggle('pressed');
    });
  }

  // set current year
  const years = ['year', 'year2', 'year3', 'year4', 'year5', 'year6'];
  years.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = new Date().getFullYear();
  });

  // simple scroll animation
  const animEls = document.querySelectorAll('.animate, .animate-up');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(ent => {
      if (ent.isIntersecting) {
        ent.target.style.opacity = 1;
        ent.target.style.transform = 'translateY(0)';
        obs.unobserve(ent.target);
      }
    });
  }, { threshold: 0.15 });
  animEls.forEach(el => obs.observe(el));
});
