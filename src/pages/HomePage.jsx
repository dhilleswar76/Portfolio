import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileDown, Sparkles, Code2, GraduationCap, Award, ExternalLink, Eye, Mail, CheckCircle2 } from 'lucide-react';
import { personalInfo, projectsData, skillsData, educationData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import ProjectModal from '../components/ProjectModal';

export default function HomePage() {
  const [roleText, setRoleText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setRoleText(currentRole.slice(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        } else {
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

  return (
    <div className="page-transition">
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span>Open for Software Roles & Internships</span>
          </div>

          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">{personalInfo.name}</h1>
          
          <p className="hero-role">
            <span className="typed-text">{roleText}</span>
            <span className="cursor">|</span>
          </p>

          <p className="hero-desc">{personalInfo.bio}</p>

          <div className="hero-btns">
            <Link to="/projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <span>Contact Me</span>
            </Link>
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
      </section>

      {/* ===== QUICK METRICS BANNER ===== */}
      <section className="home-metrics-section">
        <div className="container">
          <div className="metrics-grid">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="metric-card">
                <span className="metric-num">{stat.number}</span>
                <span className="metric-lbl">{stat.label}</span>
              </div>
            ))}
            <div className="metric-card">
              <span className="metric-num">8.44</span>
              <span className="metric-lbl">B.Tech CGPA</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED ABOUT PREVIEW ===== */}
      <section className="section section-alt">
        <div className="container">
          <div className="home-preview-grid">
            <div className="home-preview-img-wrap">
              <div className="about-avatar">
                <div className="avatar-placeholder">
                  <img
                    src="/DILLI PHOTO.jpg"
                    alt={personalInfo.name}
                    className="about-avatar-img"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = './DILLI PHOTO.jpg';
                    }}
                  />
                </div>
                <div className="avatar-glow-ring"></div>
              </div>
            </div>

            <div className="home-preview-content">
              <div className="section-label">Get To Know Me</div>
              <h2 className="section-title text-left">
                Passionate About <span className="gradient-text">Engineering & Innovation</span>
              </h2>
              <p className="home-preview-text">
                {personalInfo.aboutParagraphs[0]}
              </p>
              <p className="home-preview-text">
                {personalInfo.aboutParagraphs[1]}
              </p>

              <div className="home-preview-actions">
                <Link to="/about" className="btn btn-primary">
                  <span>Learn More About Me</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/education" className="btn btn-outline">
                  <span>Academic Journey</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS PREVIEW ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <p className="section-label">Featured Work</p>
              <h2 className="section-title text-left">
                Selected <span className="gradient-text">Projects</span>
              </h2>
            </div>
            <Link to="/projects" className="btn btn-outline">
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="projects-grid">
            {projectsData.slice(0, 3).map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-media">
                  <img
                    src={project.image}
                    alt={`${project.title} project interface`}
                    loading="lazy"
                  />
                  <div className="project-media-overlay">
                    <div className="project-category-badge">{project.category}</div>
                    <h3>{project.title}</h3>
                  </div>
                </div>

                <div className="project-card-body">
                  <p className="project-card-desc">{project.description}</p>
                  
                  <div className="project-tech-pills">
                    {project.techStack.slice(0, 3).map((tech, idx) => {
                      const name = typeof tech === 'object' ? tech.name : tech;
                      const role = typeof tech === 'object' ? tech.role : null;
                      return (
                        <span key={idx} className="tag tag-sm" title={role ? `${name} — ${role}` : name}>
                          {name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="project-actions">
                  <button
                    type="button"
                    className="btn btn-primary project-view-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Eye size={16} />
                    <span>View Details</span>
                  </button>
                  
                  <div className="project-quick-links">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn-icon"
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn-icon"
                        title="GitHub Repository"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOME CTA BANNER ===== */}
      <section className="section section-alt">
        <div className="container">
          <div className="home-cta-card glass-card">
            <div className="home-cta-content">
              <h2>Let's build something remarkable together</h2>
              <p>
                Whether you have an internship opportunity, a software project, or an open-source collaboration, I'd love to connect.
              </p>
            </div>
            <div className="home-cta-actions">
              <Link to="/contact" className="btn btn-primary">
                <span>Get In Touch</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
