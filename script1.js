/* ===================================================
   PORTFOLIO – script1.js
=================================================== */

'use strict';

/* ---- NAVBAR: scroll shrink & active link ---- */
const header    = document.getElementById('header');
const navLinks  = document.querySelectorAll('.nav-link');
const sections  = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    // Shrink header
    header.classList.toggle('scrolled', window.scrollY > 20);

    // Active nav link
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });

    // Back to top button
    backToTop.classList.toggle('visible', window.scrollY > 400);

    // Trigger reveals
    revealOnScroll();

    // Animate skill bars when section is visible
    animateBarsOnce();
}, { passive: true });

/* ---- MOBILE NAV TOGGLE ---- */
const navToggle = document.getElementById('nav-toggle');
const navbar    = document.getElementById('navbar');

navToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
});

// Close nav on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => navbar.classList.remove('open'));
});

/* ---- SMOOTH SCROLL for all anchor links ---- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

/* ---- BACK TO TOP ---- */
const backToTop = document.getElementById('back-to-top');

/* ---- TYPEWRITER EFFECT ---- */
const roles = [
    'Full Stack Developer',
    'Computer Science Student',
    'Problem Solver',
    'Software Engineer',
    'Tech Enthusiast'
];
const typedEl = document.getElementById('typed');
let roleIndex = 0, charIndex = 0, isDeleting = false;

function type() {
    const current = roles[roleIndex];
    if (!isDeleting) {
        typedEl.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(type, 1800);
            return;
        }
    } else {
        typedEl.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    setTimeout(type, isDeleting ? 60 : 110);
}
type();

/* ---- REVEAL ON SCROLL ---- */
function revealOnScroll() {
    document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            el.classList.add('visible');
        }
    });
}
revealOnScroll(); // run on load too

/* ---- SKILL BARS ANIMATION ---- */
let barsAnimated = false;
function animateBarsOnce() {
    if (barsAnimated) return;
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;
    const rect = skillsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        document.querySelectorAll('.bar-fill').forEach(bar => {
            bar.style.width = bar.dataset.width + '%';
        });
        barsAnimated = true;
    }
}
animateBarsOnce(); // check on load

/* ---- CONTACT FORM ---- */
const form       = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        // Simulate sending (replace with real API call e.g. EmailJS / FormSubmit)
        setTimeout(() => {
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
            formStatus.className = 'form-status success';
            form.reset();
            setTimeout(() => { formStatus.textContent = ''; formStatus.className = 'form-status'; }, 5000);
        }, 1800);
    });
}

/* ---- NAV TOGGLE ANIMATION ---- */
navToggle.addEventListener('click', () => {
    const spans = navToggle.querySelectorAll('span');
    const isOpen = navbar.classList.contains('open');
    if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
});
