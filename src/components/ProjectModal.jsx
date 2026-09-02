import React, { useEffect } from 'react';
import { X, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.classList.add('modal-open');
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const explanationParagraphs = typeof project.explanation === 'string'
    ? project.explanation.split('\n\n')
    : [project.explanation];

  return (
    <div 
      className="project-modal open" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="project-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="project-modal-backdrop" onClick={onClose}></div>
      
      <div className="project-modal-panel">
        <button
          type="button"
          className="project-modal-close"
          aria-label="Close project modal"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="project-modal-header">
          <span className="project-modal-label">{project.category}</span>
          <h2 className="project-modal-title" id="project-modal-title">
            {project.title}
          </h2>
          <p className="project-modal-description">{project.description}</p>
        </div>

        <div className="project-modal-block">
          <h3>
            <Layers size={18} className="text-accent-1" />
            <span>Overview & Technical Architecture</span>
          </h3>
          <div className="project-modal-paragraphs">
            {explanationParagraphs.map((para, idx) => (
              <p key={idx} className="project-modal-para">{para}</p>
            ))}
          </div>
        </div>

        {project.features && (
          <div className="project-modal-features">
            <h3>Key Features</h3>
            <ul>
              {project.features.map((feature, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} className="text-accent-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="project-modal-tech">
          <h4>Technologies & Architecture Purpose:</h4>
          <div className="tech-roles-list">
            {project.techStack.map((tech, idx) => {
              const name = typeof tech === 'object' ? tech.name : tech;
              const role = typeof tech === 'object' ? tech.role : null;
              return (
                <div key={idx} className="tech-role-item">
                  <span className="tag tag-sm">{name}</span>
                  {role && <span className="tech-role-purpose">— {role}</span>}
                </div>
              );
            })}
          </div>
        </div>

        <div className="project-modal-links">
          {project.demoUrl && (
            <a
              className="btn btn-primary project-modal-link"
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <ExternalLink size={18} />
              <span>Open Live Project</span>
            </a>
          )}
          {project.repoUrl && (
            <a
              className="btn btn-outline project-modal-link"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <GithubIcon size={18} />
              <span>Open Git Repo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
