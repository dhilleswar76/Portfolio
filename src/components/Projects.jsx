import React, { useState } from 'react';
import { ExternalLink, Eye, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Featured Work</p>
          <h2 className="section-title">
            Pro<span className="gradient-text">jects</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
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
                  {project.techStack.length > 3 && (
                    <span className="tag tag-sm tag-ghost">+{project.techStack.length - 3}</span>
                  )}
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
                      aria-label={`${project.title} Live Demo`}
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
                      aria-label={`${project.title} GitHub Repo`}
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

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
