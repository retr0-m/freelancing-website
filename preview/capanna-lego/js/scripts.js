/* scripts.js - vanilla JS for slider, mobile nav, modal, small UI interactions */

/* simple DOM ready */
document.addEventListener('DOMContentLoaded', function () {

    // mobile nav toggle
    const navToggle = document.getElementById('nav-toggle');
    const mainNavs = document.querySelectorAll('#main-nav');
    const mainNav = mainNavs.length ? mainNavs[0] : null;
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            const open = mainNav.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }

    // hero slider
    const slider = document.querySelector('.hero-slider');
    const slides = slider ? Array.from(slider.children) : [];
    let current = 0;
    const autoplay = slider && slider.dataset.autoplay === 'true';
    const interval = parseInt(slider?.dataset.interval || 6000, 10);
    const prevBtn = document.querySelector('.slider-control.left');
    const nextBtn = document.querySelector('.slider-control.right');

    function showSlide(i) {
        i = (i + slides.length) % slides.length;
        if (slider) slider.style.transform = `translateX(-${i * 100}%)`;
        current = i;
    }
    if (prevBtn) prevBtn.addEventListener('click', () => showSlide(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => showSlide(current + 1));

    if (autoplay && slides.length > 1) {
        setInterval(() => showSlide(current + 1), interval);
    }

    // reservation modal
    const reserveModal = document.getElementById('modal-reserve');
    const openReserveBtns = document.querySelectorAll('#reserve-cta, .open-reserve');
    const closeReserveBtns = document.querySelectorAll('.modal-close');

    function openModal(modal) {
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    function closeModal(modal) {
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    openReserveBtns.forEach(b => b.addEventListener('click', () => {
        if (reserveModal) openModal(reserveModal);
    }));
    closeReserveBtns.forEach(b => b.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        if (modal) closeModal(modal);
    }));

    // simple form submit (offline friendly: shows success message)
    const reserveForm = document.getElementById('reserve-form');
    if (reserveForm) {
        reserveForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const data = new FormData(reserveForm);
            reserveForm.innerHTML = `<div style="padding:1rem"><h4>Grazie!</h4><p>La richiesta è stata presa in carico. Per conferme urgenti chiamare il numero in Contatti.</p><button class="btn" id="close-after">Chiudi</button></div>`;
            document.getElementById('close-after').addEventListener('click', () => {
                const modal = document.getElementById('modal-reserve');
                if (modal) modal.setAttribute('aria-hidden', 'true');
                location.reload();
            });
        });
    }

    // open-map quick action - scroll to map page or open modal
    const openMapBtn = document.getElementById('open-map');
    if (openMapBtn) {
        openMapBtn.addEventListener('click', () => {
            window.location.href = 'dove-siamo/index.html';
        });
    }

    // small animations on load
    document.querySelectorAll('main .container > *:first-child').forEach(el => {
        el.classList.add('fade-in-up');
    });

});