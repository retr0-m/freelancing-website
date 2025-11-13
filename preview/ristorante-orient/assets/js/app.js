document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('navLinks');
    if (burger) burger.addEventListener('click', () => nav.classList.toggle('show'));
});