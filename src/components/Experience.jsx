import React from 'react';
import { Calendar, Users, CheckCircle } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Where I've Contributed</p>
          <h2 className="section-title">
            Experi<span className="gradient-text">ence</span>
          </h2>
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
      </div>
    </section>
  );
}
