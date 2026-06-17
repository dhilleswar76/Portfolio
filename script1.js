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
    if (backToTop) {
        backToTop.classList.toggle('visible', window.scrollY > 400);
    }

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

window.addEventListener('load', () => {
    revealOnScroll();
    animateBarsOnce();
});

window.addEventListener('hashchange', () => {
    revealOnScroll();
    animateBarsOnce();
});

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

/* ---- PROJECT VIEWER ---- */
const projectModal = document.getElementById('project-modal');
const projectModalTitle = document.getElementById('project-modal-title');
const projectModalDescription = document.getElementById('project-modal-description');
const projectModalExplanation = document.getElementById('project-modal-explanation');
const projectModalDemo = document.getElementById('project-modal-demo');
const projectModalRepo = document.getElementById('project-modal-repo');

const projectData = {
    skillsync: {
        title: 'SkillSync',
        description: 'Full-stack learning platform for structured course management and coding practice.',
        explanation: 'SkillSync is a full-stack learning platform that combines course management, interactive coding practice, quizzes, progress tracking, and certificate generation in one web application. It offers structured learning across multiple tech domains, a responsive React frontend, a Node.js and MongoDB backend, secure authentication, role-based access control, and downloadable PDF certificates for completed courses.',
        demoUrl: '#',
        repoUrl: '#'
    },
    'task-manager': {
        title: 'Task Manager',
        description: 'Productivity app for organizing daily work, priorities, and progress.',
        explanation: 'A productivity app focused on organizing daily work, priorities, and progress with an intuitive workflow.',
        demoUrl: '#',
        repoUrl: '#'
    },
    'ecommerce-ui': {
        title: 'E-Commerce UI',
        description: 'Responsive storefront layout with product cards and conversion-focused sections.',
        explanation: 'A responsive storefront layout with product cards, clean navigation, and conversion-focused content blocks.',
        demoUrl: '#',
        repoUrl: '#'
    }
};

const projectButtons = document.querySelectorAll('.project-view-btn');
const closeProjectModalButtons = document.querySelectorAll('[data-close-project-modal]');

function openProjectModal(projectKey) {
    const project = projectData[projectKey];
    if (!project || !projectModal) return;

    projectModalTitle.textContent = project.title;
    projectModalDescription.textContent = project.description;
    projectModalExplanation.textContent = project.explanation;
    projectModalDemo.href = project.demoUrl;
    projectModalRepo.href = project.repoUrl;

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
}

function closeProjectModal() {
    if (!projectModal) return;

    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
}

projectButtons.forEach(button => {
    button.addEventListener('click', () => openProjectModal(button.dataset.project));
});

closeProjectModalButtons.forEach(button => {
    button.addEventListener('click', closeProjectModal);
});

window.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeProjectModal();
});

if (projectModal) {
    projectModal.addEventListener('click', event => {
        if (event.target === projectModal || event.target.hasAttribute('data-close-project-modal')) {
            closeProjectModal();
        }
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

/* ---- CERTIFICATE HELPERS ---- */
/**
 * Update a certificate link in the certifications list.
 * certIndex: 0-based index of the certificate card in the DOM
 * url: the URL to set for the certificate (string)
 * Returns true if updated, false otherwise.
 */
function updateCertificateLink(certIndex, url) {
    const links = document.querySelectorAll('.cert-link');
    const link = links[certIndex];
    if (!link) return false;
    link.href = url;
    link.dataset.placeholder = 'false';
    link.textContent = 'View certificate';
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noreferrer noopener');
    return true;
}

window.updateCertificateLink = updateCertificateLink;
