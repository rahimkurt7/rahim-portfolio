import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <motion.h1
        className="about-title"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {t('about.title')}
      </motion.h1>

      <motion.div
        className="about-card"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {[...Array(9)].map((_, i) => (
          <p key={i}>{t(`about.paragraph${i + 1}`)}</p>
        ))}
      </motion.div>

      <footer className="footer">
        <div className="footer-socials">
          <a href="https://linkedin.com/in/rahimkurt" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/rahimkurt7" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://instagram.com/rahimkurt" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/905538655052" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>

        <div className="footer-contact">
          <a href="mailto:rahimkurt.7@gmail.com">rahimkurt.7@gmail.com</a> — <strong>Rahim Kurt</strong>
        </div>

        <div className="footer-copy">© 2025 {t('footer.copy')}</div>
      </footer>
    </div>
  );
}

export default About;
