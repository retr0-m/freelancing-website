/* main.js - interactions for Jungle Club Lugano */
document.addEventListener('DOMContentLoaded', () => {

    // Splash animation
    const splash = document.getElementById('splash');
    const splashClose = () => {
        if (!splash) return;
        splash.classList.add('hide');
        setTimeout(() => splash.style.display = 'none', 900);
    };
    // close splash after 2800ms
    setTimeout(splashClose, 2800);

    // Navbar active links (based on pathname)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(a => {
        try {
            const href = a.getAttribute('href');
            if (location.pathname.endsWith(href.replace('./', '')) || location.pathname.includes(href.replace('./', '').replace('index.html', ''))) {
                a.classList.add('active');
            }
        } catch (e) { }
    });

    // Mobile hamburger toggle
    const hb = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hb) {
        hb.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            hb.classList.toggle('open');
        });
    }

    // Scroll reveal with IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.18 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Leaves parallax scale on mousemove (desktop)
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const l = hero.querySelectorAll('.leaf-float');
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            l.forEach((leaf, i) => {
                const depth = (i % 3) + 1;
                leaf.style.transform = `translate(${x * depth}px, ${y * depth}px) rotate(${x * depth * 4}deg)`;
            });
        });
    }

    // Modal (prenotazioni)
    const modalOpen = document.querySelectorAll('[data-modal-open]');
    const modalClose = document.querySelectorAll('[data-modal-close]');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    modalOpen.forEach(b => {
        b.addEventListener('click', () => {
            const id = b.getAttribute('data-modal-open');
            const m = document.getElementById(id);
            if (m && modalBackdrop) {
                modalBackdrop.style.display = 'grid';
                m.style.display = 'block';
                setTimeout(() => modalBackdrop.classList.add('show'), 20);
            }
        });
    });
    modalClose.forEach(b => {
        b.addEventListener('click', () => {
            if (modalBackdrop) {
                modalBackdrop.classList.remove('show');
                setTimeout(() => {
                    modalBackdrop.style.display = 'none';
                    document.querySelectorAll('.modal').forEach(mm => mm.style.display = 'none');
                }, 320);
            }
        });
    });
    // close on backdrop click
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                modalBackdrop.classList.remove('show');
                setTimeout(() => modalBackdrop.style.display = 'none', 320);
            }
        });
    }

    // simple slider for gallery (drag to scroll)
    const slider = document.querySelector('.slider');
    if (slider) {
        let isDown = false, startX, scrollLeft;
        slider.addEventListener('mousedown', (e) => {
            isDown = true; slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft; scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => { isDown = false; slider.classList.remove('active') });
        slider.addEventListener('mouseup', () => { isDown = false; slider.classList.remove('active') });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft; const walk = (x - startX) * 1.5;
            slider.scrollLeft = scrollLeft - walk;
        });
    }

    // smooth anchor scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const t = document.querySelector(a.getAttribute('href'));
            if (t) t.scrollIntoView({ behavior: 'smooth' });
        });
    });

});