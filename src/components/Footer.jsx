import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-name">{personalInfo.name}</div>
          <p className="footer-role-text">{personalInfo.tagline}</p>
        </div>

        <div className="footer-nav-links">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="footer-nav-link">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="footer-right">
          <div className="footer-socials">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="footer-social-link"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="footer-social-link"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={personalInfo.socials.email}
              aria-label="Email"
              className="footer-social-link"
            >
              <Mail size={18} />
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll to top"
            title="Back to Top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
