import React from 'react';
import { Award, ExternalLink, CheckCircle2, FileCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Proof of Learning</p>
          <h2 className="section-title">
            Certifi<span className="gradient-text">cations</span>
          </h2>
        </div>

        <div className="certs-list">
          {certificationsData.map((cert) => (
            <article key={cert.id} className="cert-card">
              <div className="cert-card-inner">
                <div className="cert-icon-wrap">
                  <Award size={24} className="cert-main-icon" />
                </div>

                <div className="cert-info">
                  <div className="cert-header-meta">
                    <span className="tag tag-sm">{cert.badge}</span>
                    <span className="cert-status">
                      <CheckCircle2 size={13} className="text-accent-2" /> Verified
                    </span>
                  </div>
                  <h3>{cert.title}</h3>
                  <p className="cert-org">{cert.issuer}</p>
                </div>

                <div className="cert-actions">
                  <a
                    className="cert-link btn btn-outline"
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FileCheck size={16} />
                    <span>View Certificate</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
