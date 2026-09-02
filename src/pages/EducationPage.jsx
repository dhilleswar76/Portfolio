import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, GraduationCap, Award, BookOpen, ArrowRight } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function EducationPage() {
  return (
    <div className="page-transition page-container">
      <div className="container">
        <div className="page-header">
          <p className="section-label">Academic Foundations</p>
          <h1 className="page-title">
            Edu<span className="gradient-text">cation</span>
          </h1>
          <p className="page-subtitle">
            Formal education, academic achievements, and core Computer Science foundations.
          </p>
        </div>

        <div className="timeline">
          {educationData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot">
                <GraduationCap size={14} className="timeline-dot-icon" />
              </div>

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div className="timeline-date">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                  <span className="timeline-tag">{item.type}</span>
                </div>

                <h3>{item.degree}</h3>
                <p className="timeline-org">{item.institution}</p>

                <div className="timeline-badge">
                  <Award size={16} className="text-accent-2" />
                  <strong>{item.score}</strong>
                </div>

                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="page-footer-nav">
          <Link to="/experience" className="btn btn-outline">
            <span>Next: Leadership & Experience</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
