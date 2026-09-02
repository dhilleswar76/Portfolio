import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, CheckCircle, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { experienceData, workshopsData } from '../data/portfolioData';

export default function ExperiencePage() {
  return (
    <div className="page-transition page-container">
      <div className="container">
        <div className="page-header">
          <p className="section-label">Leadership & Community</p>
          <h1 className="page-title">
            Experi<span className="gradient-text">ence</span>
          </h1>
          <p className="page-subtitle">
            Leading coding initiatives, mentoring peers, and driving collaborative developer workshops.
          </p>
        </div>

        <div className="timeline">
          {experienceData.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot">
                <Users size={14} className="timeline-dot-icon" />
              </div>

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div className="timeline-date">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <span className="timeline-tag">{exp.tag}</span>
                </div>

                <h3>{exp.role}</h3>
                <p className="timeline-org">{exp.organization}</p>

                <ul className="experience-highlights">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx}>
                      <CheckCircle size={15} className="bullet-icon" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Workshops & Seminars */}
        {workshopsData && workshopsData.length > 0 && (
          <div className="experience-workshops-block">
            <div className="section-header">
              <p className="section-label">Workshops & Events</p>
              <h2 className="section-title">
                Technical <span className="gradient-text">Workshops</span>
              </h2>
            </div>

            <div className="workshops-list">
              {workshopsData.map((ws, wIdx) => (
                <div key={wIdx} className="workshop-card">
                  <div className="workshop-badge">
                    <BookOpen size={22} />
                  </div>
                  <div className="workshop-content">
                    <h3>{ws.title}</h3>
                    <p className="workshop-org">
                      <Sparkles size={14} className="text-accent-2" />
                      <span>{ws.organizer}</span>
                    </p>
                    <p>{ws.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="page-footer-nav">
          <Link to="/projects" className="btn btn-primary">
            <span>Next: Featured Projects</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
