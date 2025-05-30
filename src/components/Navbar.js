import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <span className="logo">Rahim Kurt</span>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fas fa-bars"></i>
      </div>

      <div className={`nav-items ${menuOpen ? 'show' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>{t('navbar.home')}</Link>
        <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>{t('navbar.about')}</Link>
        <Link to="/projects" className="nav-link" onClick={() => setMenuOpen(false)}>{t('navbar.projects')}</Link>
        <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>{t('navbar.contact')}</Link>

        <a href="/Rahim_KURT.pdf" download className="cv-button">{t('navbar.download_cv')}</a>
        <a href="https://www.linkedin.com/in/rahim-kurt-977a41222/" target="_blank" rel="noopener noreferrer" className="icon-link linkedin"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/rahimkurt7" target="_blank" rel="noopener noreferrer" className="icon-link github"><i className="fab fa-github"></i></a>
        <a href="https://bionluk.com/rahimkurt" target="_blank" rel="noopener noreferrer" className="icon-link bionluk"><i className="fas fa-briefcase"></i></a>
        <a href="https://bionluk.com/rahimkurt" target="_blank" rel="noopener noreferrer" className="offer-button">{t('navbar.offer')}</a>

        <div className="lang-switch">
          <button onClick={() => i18n.changeLanguage('tr')}><img src="/flags/tr.png" alt="TR" height="20" /></button>
          <button onClick={() => i18n.changeLanguage('en')}><img src="/flags/gb.png" alt="EN" height="20" /></button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
