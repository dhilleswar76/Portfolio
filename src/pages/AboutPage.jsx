import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, GraduationCap, Mail, Briefcase, FileText, CheckCircle2, ArrowRight, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function AboutPage() {
  const iconMap = {
    MapPin: <MapPin size={18} className="info-icon" />,
    GraduationCap: <GraduationCap size={18} className="info-icon" />,
    Mail: <Mail size={18} className="info-icon" />,
    Briefcase: <Briefcase size={18} className="info-icon" />
  };

  return (
    <div className="page-transition page-container">
      <div className="container">
        <div className="page-header">
          <p className="section-label">Get To Know Me</p>
          <h1 className="page-title">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="page-subtitle">
            Computer Science student, full-stack builder, and passionate problem solver.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-avatar-wrap">
            <div className="about-avatar">
              <div className="avatar-placeholder">
                <img
                  src="/DILLI PHOTO.jpg"
                  alt={`${personalInfo.name} portrait`}
                  className="about-avatar-img"
                  onError={(e) => {
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

            <h3>Turning Ideas into Reliable, High-Performance Software</h3>
            
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

            <div className="about-cta-row">
              <a
                href={personalInfo.resumeUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FileText size={18} />
                <span>View Full CV</span>
              </a>
              <Link to="/skills" className="btn btn-outline">
                <span>View Technical Skills</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
