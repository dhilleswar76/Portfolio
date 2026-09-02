import React from 'react';
import { Calendar, GraduationCap, Award, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <p className="section-label">My Academic Journey</p>
          <h2 className="section-title">
            Edu<span className="gradient-text">cation</span>
          </h2>
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
      </div>
    </section>
  );
}
