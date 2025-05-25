import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <motion.div 
      className="about-container" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.6 }}>

      <motion.h1 
        className="about-title" 
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: 0.2 }}>
        Hakkımda
      </motion.h1>

      <motion.div 
        className="about-card" 
        initial={{ scale: 0.95, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ delay: 0.4 }}>

        <p>
          <strong>İzmir Bakırçay Üniversitesi</strong> Bilgisayar Mühendisliği mezunuyum. Üniversite hayatım boyunca <span className="highlight">mobil uygulama geliştirme</span>, <span className="highlight">web projeleri</span> ve <span className="highlight">otomasyon sistemleri</span> üzerine çalışmalar yaptım. Teorik bilgilerimi pratiğe dökmeyi her zaman öncelik haline getirdim.
        </p>

        <p>
          <span className="emoji">📱</span> <strong>Mobil geliştirme</strong> alanında özellikle <span className="highlight">React Native</span>, <span className="highlight">Expo</span> ve <span className="highlight">Firebase</span> kullanarak çapraz platform projeler ürettim. Takım çalışmalarında aktif görev alarak proje yönetimi, sorumluluk paylaşımı ve zaman planlaması konularında becerilerimi geliştirdim.
        </p>

        <p>
          <span className="emoji">🤖</span> <strong>Yapay zekâ ve prompt mühendisliği</strong> alanlarına yoğun ilgi duymaktayım. Üretken yapay zekâ araçlarıyla hızlı çözümler üretebiliyor, büyük projeleri kısa sürede modelleyebiliyorum. Python, JavaScript gibi dillere hâkimim; yeni teknolojilere hızlı adapte olabiliyorum.
        </p>

        <p>
          <span className="emoji">💡</span> <strong>Problem çözme, yaratıcılık ve iletişim</strong> konularındaki güçlü yönlerim sayesinde ekip içi uyum sağlar ve her projeye değer katmayı hedeflerim. Yazılım dünyasında sürdürülebilir bir kariyer inşa ederek, yenilikçi ve anlamlı çözümler üretmeyi amaçlıyorum.
        </p>
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
      </footer>
      </motion.div>
      
    </motion.div>
    
  );
  
}
  
export default About;
