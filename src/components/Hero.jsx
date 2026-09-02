import React, { useState, useEffect } from 'react';
import { Mail, ChevronDown, ArrowRight, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [roleText, setRoleText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setRoleText(currentRole.slice(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        } else {
          // Pause at full word
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        if (charIndex > 0) {
          setRoleText(currentRole.slice(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-pulse"></span>
          <span>Open for Roles & Internships</span>
        </div>

        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">{personalInfo.name}</h1>
        
        <p className="hero-role">
          <span className="typed-text">{roleText}</span>
          <span className="cursor">|</span>
        </p>

        <p className="hero-desc">{personalInfo.bio}</p>

        <div className="hero-btns">
          <a 
            href="#projects" 
            onClick={(e) => scrollToSection(e, '#projects')} 
            className="btn btn-primary"
          >
            <span>View Projects</span>
            <ArrowRight size={18} />
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, '#contact')} 
            className="btn btn-outline"
          >
            <span>Contact Me</span>
          </a>
          <a 
            href={personalInfo.resumeUrl} 
            target="_blank" 
            rel="noreferrer noopener" 
            className="btn btn-glass"
          >
            <FileDown size={18} />
            <span>Resume</span>
          </a>
        </div>

        <div className="hero-socials">
          <a 
            href={personalInfo.socials.github} 
            target="_blank" 
            rel="noreferrer noopener" 
            aria-label="GitHub Profile"
            className="social-icon"
          >
            <GithubIcon size={20} />
          </a>
          <a 
            href={personalInfo.socials.linkedin} 
            target="_blank" 
            rel="noreferrer noopener" 
            aria-label="LinkedIn Profile"
            className="social-icon"
          >
            <LinkedinIcon size={20} />
          </a>
          <a 
            href={personalInfo.socials.email} 
            aria-label="Email Me"
            className="social-icon"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <a 
          href="#about" 
          onClick={(e) => scrollToSection(e, '#about')} 
          aria-label="Scroll to About section" 
          title="Scroll to About section"
        >
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
}
