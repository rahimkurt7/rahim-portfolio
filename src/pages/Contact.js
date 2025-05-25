import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

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
        <h1 className="contact-title">İletişime Geç</h1>
        <p className="contact-subtitle">Soru, öneri ya da projeler için bana ulaşabilirsin.</p>

        <div className="contact-card">
          {!submitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Ad Soyad"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-posta"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Mesajınız"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Gönder</button>
            </form>
          ) : (
            <div className="thank-you">Teşekkürler! Mesajınız başarıyla gönderildi. 🎉</div>
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
          <a href="https://linkedin.com/in/rahimkurt" target="_blank"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/rahimkurt7" target="_blank"><i className="fab fa-github"></i></a>
          <a href="https://instagram.com/rahimkurt" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="https://wa.me/905538655052" target="_blank"><i className="fab fa-whatsapp"></i></a>
        </div>
        <div className="footer-contact">rahimkurt.7@gmail.com — Rahim Kurt</div>
        <div>© 2025 Tüm Hakları Saklıdır</div>
      </footer>
    </>
  );
}

export default Contact;
