import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <span className="logo">Rahim Kurt</span>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fas fa-bars"></i>
        </div>
      </div>

      <div className={`navbar-center ${menuOpen ? 'show' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Ana Sayfa</Link>
        <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>Hakkımda</Link>
        <Link to="/projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projeler</Link>
        <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>İletişim</Link>
      </div>

      <div className={`navbar-right ${menuOpen ? 'show' : ''}`}>
        <a href="/Rahim_KURT.pdf" download className="cv-button">📄 CV İndir</a>
        <a href="https://bionluk.com/rahimkurt" target="_blank" rel="noopener noreferrer" className="offer-button">📩 İş Teklifi Yap</a>
        <a href="https://www.linkedin.com/in/rahim-kurt-977a41222/" target="_blank" rel="noopener noreferrer" className="icon-link linkedin"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/rahimkurt7" target="_blank" rel="noopener noreferrer" className="icon-link github"><i className="fab fa-github"></i></a>
        <a href="https://bionluk.com/rahimkurt" target="_blank" rel="noopener noreferrer" className="icon-link bionluk"><i className="fas fa-briefcase"></i></a>
      </div>
    </nav>
  );
}

export default Navbar;
