import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle2, FileCheck, ArrowRight, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function CertificationsPage() {
  return (
    <div className="page-transition page-container">
      <div className="container">
        <div className="page-header">
          <p className="section-label">Proof of Learning & Mastery</p>
          <h1 className="page-title">
            Certifi<span className="gradient-text">cations</span>
          </h1>
          <p className="page-subtitle">
            Industry-recognized credentials from GeeksforGeeks, NPTEL, Eduskills, and Google for Developers.
          </p>
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
                      <ShieldCheck size={14} className="text-accent-2" /> Verified
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

        <div className="page-footer-nav">
          <Link to="/contact" className="btn btn-primary">
            <span>Ready to collaborate? Contact Me</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
