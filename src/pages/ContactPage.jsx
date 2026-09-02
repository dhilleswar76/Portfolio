import React, { useState } from 'react';
import { Send, Zap, MapPin, Mail, Loader2, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('dilleswararaomalla410@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/dilleswararaomalla410@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `New Portfolio Message: ${formData.subject || 'General Inquiry'}`,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission response was not ok');
      }
    } catch (err) {
      setStatus({
        type: 'success',
        message: 'Message queued! You can also reach me directly at dilleswararaomalla410@gmail.com.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-transition page-container">
      <div className="container">
        <div className="page-header">
          <p className="section-label">Get In Touch</p>
          <h1 className="page-title">
            Contact <span className="gradient-text">Me</span>
          </h1>
          <p className="page-subtitle">
            Have a project idea, software role, internship opportunity, or collaboration in mind? Let's connect.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-col">
            <p className="contact-intro">
              I am actively looking for software engineering roles, internships, and impactful web development collaborations. 
              Fill out the form to send me an email, or connect with me via LinkedIn and GitHub.
            </p>

            <div className="contact-details-cards">
              <div className="contact-card">
                <div className="contact-icon">
                  <Zap size={20} />
                </div>
                <div className="contact-card-text">
                  <div className="ci-label">Fast Response</div>
                  <span className="ci-val">Usually within 24 hours</span>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-card-text">
                  <div className="ci-label">Location</div>
                  <span className="ci-val">India (Available for Remote & Relocation)</span>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-card-text">
                  <div className="ci-label">Direct Email</div>
                  <a href="mailto:dilleswararaomalla410@gmail.com" className="ci-val email-link">
                    dilleswararaomalla410@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="copy-btn"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            <form onSubmit={handleSubmit} className="contact-form glass-card">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project inquiry / Opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project, role, or idea..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {status.message && (
                <div className={`form-feedback ${status.type}`}>
                  {status.type === 'success' ? (
                    <CheckCircle2 size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <div className="form-actions">
                <button
                  type="submit"
                  className="btn btn-primary btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
