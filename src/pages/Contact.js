import React, { useState } from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="contact-container">
        <h1 className="contact-title">{t('contact.title')}</h1>
        <p className="contact-subtitle">{t('contact.subtitle')}</p>

        <div className="contact-card">
          {!submitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder={t('contact.namePlaceholder')}
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t('contact.emailPlaceholder')}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder={t('contact.messagePlaceholder')}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">{t('contact.submitButton')}</button>
            </form>
          ) : (
            <div className="thank-you">{t('contact.thankYou')}</div>
          )}

          <div className="contact-icons">
            <a href="https://linkedin.com/in/rahimkurt" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/rahimkurt7" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://instagram.com/rahimkurt" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/905538655052?text=Merhaba%20Rahim!%20İletişime%20geçmek%20istiyorum." target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/rahim-kurt-977a41222/" target="_blank"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/rahimkurt7" target="_blank"><i className="fab fa-github"></i></a>
          <a href="https://instagram.com/rahimkurt.7" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="https://wa.me/905538655052" target="_blank"><i className="fab fa-whatsapp"></i></a>
        </div>
        <div className="footer-contact">{t('footer.email')}</div>
        <div>{t('footer.copyright')}</div>
      </footer>
    </>
  );
}

export default Contact;
