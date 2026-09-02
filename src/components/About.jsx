import React from 'react';
import { MapPin, GraduationCap, Mail, Briefcase, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    MapPin: <MapPin size={18} className="info-icon" />,
    GraduationCap: <GraduationCap size={18} className="info-icon" />,
    Mail: <Mail size={18} className="info-icon" />,
    Briefcase: <Briefcase size={18} className="info-icon" />
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Get To Know Me</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-avatar-wrap">
            <div className="about-avatar">
              <div className="avatar-placeholder">
                <img
                  src="/DILLI PHOTO.jpg"
                  alt={`${personalInfo.name} profile portrait`}
                  className="about-avatar-img"
                  onError={(e) => {
                    // Fallback to local image or initial placeholder
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = './DILLI PHOTO.jpg';
                  }}
                />
              </div>
              <div className="avatar-glow-ring"></div>
            </div>

            <div className="about-stats">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-content">
            <div className="about-role-tag">
              <CheckCircle2 size={16} className="text-accent-2" />
              <span>{personalInfo.tagline}</span>
            </div>

            <h3>Engineering Solutions with Passion & Precision</h3>
            
            {personalInfo.aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="about-info-grid">
              {personalInfo.quickInfo.map((item, index) => (
                <div key={index} className="info-item">
                  {iconMap[item.icon] || <CheckCircle2 size={18} />}
                  <div>
                    <span className="info-item-label">{item.label}: </span>
                    <span className="info-item-val">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-cta">
              <a
                href={personalInfo.resumeUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FileText size={18} />
                <span>View Full CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
