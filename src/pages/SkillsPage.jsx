import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Layout, Database, Cpu, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function SkillsPage() {
  const [animateBars, setAnimateBars] = useState(false);

  const iconMap = {
    Code2: <Code2 size={22} className="category-icon" />,
    Layout: <Layout size={22} className="category-icon" />,
    Database: <Database size={22} className="category-icon" />,
    Cpu: <Cpu size={22} className="category-icon" />
  };

  useEffect(() => {
    // Trigger bar fill animation shortly after mounting
    const timer = setTimeout(() => {
      setAnimateBars(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-transition page-container">
      <div className="container">
        <div className="page-header">
          <p className="section-label">Technical Stack & Capabilities</p>
          <h1 className="page-title">
            Tech <span className="gradient-text">Skills</span>
          </h1>
          <p className="page-subtitle">
            Languages, frontend/backend frameworks, database architectures, and fundamental engineering principles.
          </p>
        </div>

        <div className="skills-categories">
          {skillsData.categories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <div className="skill-category-header">
                {iconMap[category.icon] || <Sparkles size={22} />}
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skill-bars-card">
          <div className="skill-bars-header">
            <h3>Proficiency & Mastery Levels</h3>
            <p>Demonstrated proficiency through software projects, coursework, and coding bootcamps</p>
          </div>

          <div className="skill-bars-list">
            {skillsData.proficiency.map((item, index) => (
              <div key={index} className="skill-bar-item">
                <div className="skill-bar-label">
                  <span className="skill-name">{item.name}</span>
                  <span className="skill-percent">{item.level}%</span>
                </div>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{
                      width: animateBars ? `${item.level}%` : '0%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="page-footer-nav">
          <Link to="/projects" className="btn btn-primary">
            <span>See Skills In Action: View Projects</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
