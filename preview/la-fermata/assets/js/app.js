
// --- TRANSLATION DICTIONARY ---
const translations = {
    en: {
        "nav-home": "Home",
        "nav-vibe": "The Vibe",
        "nav-menu": "Menu",
        "nav-loc": "Location",
        "hero-sub": "Lugano, Switzerland",
        "hero-title": "STREET FOOD <br><span class='text-neon'>REINVENTED</span>",
        "hero-btn": "EXPLORE THE MENU",
        "about-head": "THE CONCEPT",
        "about-sub": "EST. 2018",
        "about-p1": "We aren't a typical restaurant. La Fermata is a collision of <span class='highlight'>industrial grit</span> and <span class='highlight'>culinary finesse</span>.",
        "about-p2": "Inspired by the hustle of vintage train stations and the neon glow of modern street food culture, we bring you Lugano's finest Smash Burgers and authentic Tacos. It's loud, it's dark, and the food speaks for itself.",
        "about-p3": "Whether you're grabbing a quick bite before the train or settling in for cocktails, you've arrived at the right stop.",
        "menu-head": "THE CARGO",
        "menu-sub": "MENU",
        "cat-all": "ALL",
        "cat-burgers": "BURGERS",
        "cat-tacos": "TACOS",
        "cat-sides": "SIDES",
        "item-1": "Beef patty, crisp lettuce, tomato, house pickles, caramelized onions, secret signature sauce.",
        "item-2": "Double smashed beef, potato bun, double cheddar melt, diced onion, pickles, ketchup & mayo.",
        "item-3": "Panko fried chicken, sour cream, pico de gallo, guacamole, crispy bacon, spicy mango chutney.",
        "item-4": "Slow cooked pulled beef, melted Oaxaca cheese, tomatillo salsa, onion, cilantro, lime.",
        "item-5": "Fried chicken strips, sour cream, red cabbage slaw, guac, bacon, mango chutney.",
        "item-6": "Warm corn chips, guacamole, chili con carne, sour cream, queso fundido, jalapeños.",
        "item-7": "Crispy fries tossed with truffle oil and generous Parmesan snow.",
        "loc-head": "STOP BY",
        "loc-sub": "VISIT US",
        "det-addr": "<i class='fas fa-map-marker-alt'></i> Address",
        "det-hours": "<i class='fas fa-clock'></i> Hours",
        "det-contact": "<i class='fas fa-phone'></i> Contact",
        "day-1": "Mon - Thu:", "day-2": "Friday:", "day-3": "Saturday:", "day-4": "Sunday:"
    },
    it: {
        "nav-home": "Home",
        "nav-vibe": "L'Atmosfera",
        "nav-menu": "Menu",
        "nav-loc": "Dove Siamo",
        "hero-sub": "Lugano, Svizzera",
        "hero-title": "STREET FOOD <br><span class='text-neon'>REINVENTATO</span>",
        "hero-btn": "SCOPRI IL MENU",
        "about-head": "IL CONCETTO",
        "about-sub": "EST. 2018",
        "about-p1": "Non siamo il solito ristorante. La Fermata è l'incontro tra <span class='highlight'>grinta industriale</span> e <span class='highlight'>finezza culinaria</span>.",
        "about-p2": "Ispirati dal trambusto delle vecchie stazioni e dai neon della moderna cultura street food, portiamo a Lugano i migliori Smash Burger e Tacos autentici. È rumoroso, è scuro, e il cibo parla da sé.",
        "about-p3": "Che tu sia qui per un boccone veloce prima del treno o per un cocktail, sei arrivato alla fermata giusta.",
        "menu-head": "IL CARICO",
        "menu-sub": "MENU",
        "cat-all": "TUTTI",
        "cat-burgers": "BURGER",
        "cat-tacos": "TACOS",
        "cat-sides": "CONTORNI",
        "item-1": "Manzo, lattuga croccante, pomodoro, cetriolini, cipolle caramellate, salsa segreta.",
        "item-2": "Doppio manzo smashed, potato bun, doppio cheddar fuso, cipolla a dadini, cetriolini, ketchup e maionese.",
        "item-3": "Pollo fritto panko, panna acida, pico de gallo, guacamole, bacon croccante, chutney di mango.",
        "item-4": "Manzo sfilacciato a cottura lenta, formaggio Oaxaca, salsa tomatillo, cipolla, coriandolo, lime.",
        "item-5": "Strisce di pollo fritto, panna acida, insalata di cavolo rosso, guacamole, bacon, chutney di mango.",
        "item-6": "Chips di mais calde, guacamole, chili con carne, panna acida, queso fundido, jalapeños.",
        "item-7": "Patatine fritte croccanti con olio al tartufo e generosa nevicata di parmigiano.",
        "loc-head": "PASSA A TROVARCI",
        "loc-sub": "DOVE SIAMO",
        "det-addr": "<i class='fas fa-map-marker-alt'></i> Indirizzo",
        "det-hours": "<i class='fas fa-clock'></i> Orari",
        "det-contact": "<i class='fas fa-phone'></i> Contatti",
        "day-1": "Lun - Gio:", "day-2": "Venerdì:", "day-3": "Sabato:", "day-4": "Domenica:"
    }
};

// --- LANGUAGE LOGIC ---
function setLanguage(lang) {
    // 1. Update Buttons
    document.getElementById('btn-en').classList.remove('active');
    document.getElementById('btn-it').classList.remove('active');
    document.getElementById('btn-' + lang).classList.add('active');

    // 2. Update Text Elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // 3. Save Preference
    localStorage.setItem('lafermata-lang', lang);
}

// Load saved language or default to English
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lafermata-lang') || 'en';
    setLanguage(savedLang);
});

// --- STANDARD UI SCRIPTS ---
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

function toggleMenu() {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars'); icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times'); icon.classList.add('fa-bars');
    }
}

menuToggle.addEventListener('click', toggleMenu);

const observerOptions = { threshold: 0.15 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('active'); }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(el => { observer.observe(el); });

function filterMenu(category) {
    const cards = document.querySelectorAll('.menu-card');
    const buttons = document.querySelectorAll('.cat-btn');

    buttons.forEach(btn => {
        btn.classList.remove('active');
        // Check logic for translations in button text
        const key = btn.getAttribute('data-i18n');
        // We need to check if the button represents the category clicked
        if (key === `cat-${category}` || (category === 'all' && key === 'cat-all')) {
            btn.classList.add('active');
        }
    });

    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
            setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 100);
        } else {
            card.style.opacity = '0'; card.style.transform = 'translateY(20px)';
            setTimeout(() => { card.style.display = 'none'; }, 300);
        }
    });
}
