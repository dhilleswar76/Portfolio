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
    if (!typedEl) return;

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
if (typedEl) {
    type();
}

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

if (form) {
    form.addEventListener('submit', e => {
        const btn = form.querySelector('button[type="submit"]');
        if (btn) {
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        }
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
        demoUrl: 'https://skill-sync-learning-portal.vercel.app/',
        repoUrl: 'https://github.com/dhilleswar76/SkillSync.git'
    },
    'tasty-bite': {
        title: 'Tasty Bite',
        description: 'Restaurant management app for handling orders, tables, and daily operations.',
        explanation: 'Tasty Bite is a restaurant management app designed to streamline order handling, table management, menu updates, and daily restaurant operations in one place.',
        demoUrl: 'https://tastybite-restaurant.vercel.app/',
        repoUrl: 'https://github.com/dhilleswar76/TastyBite.git'
    },
    'swipe-learn': {
        title: 'Swipe Learn',
        description: 'Fun-based learning app for students with interactive lessons and quizzes.',
        explanation: 'Swipe Learn is a fun-based learning app for students that makes study time more engaging with interactive lessons, simple navigation, and quiz-driven learning experiences.',
        demoUrl: 'https://swipe-learn-fsd.vercel.app/',
        repoUrl: 'https://github.com/dhilleswar76/SwipeLearn-FSD.git'
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
