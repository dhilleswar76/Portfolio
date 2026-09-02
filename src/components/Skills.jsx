import React, { useState, useEffect, useRef } from 'react';
import { Code2, Layout, Database, Cpu, Sparkles } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [animateBars, setAnimateBars] = useState(false);
  const sectionRef = useRef(null);

  const iconMap = {
    Code2: <Code2 size={20} className="category-icon" />,
    Layout: <Layout size={20} className="category-icon" />,
    Database: <Database size={20} className="category-icon" />,
    Cpu: <Cpu size={20} className="category-icon" />
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateBars(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <p className="section-label">What I Work With</p>
          <h2 className="section-title">
            Tech <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="skills-categories">
          {skillsData.categories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <div className="skill-category-header">
                {iconMap[category.icon] || <Sparkles size={20} />}
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
            <h3>Proficiency & Core Competencies</h3>
            <p>Hands-on engineering proficiency and problem-solving depth</p>
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
      </div>
    </section>
  );
}
