import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet";

function Home() {
  const { t } = useTranslation();

  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);

  const techSkills = [
    { name: "HTML5", className: "html" },
    { name: "CSS3", className: "css" },
    { name: "JavaScript", className: "javascript" },
    { name: "React", className: "react" },
    { name: "React Native", className: "react-native" },
    { name: "Flutter", className: "flutter" },
    { name: "Node.js", className: "node" },
    { name: ".NET Core", className: "dotnet" },
    { name: "C#", className: "csharp" },
    { name: "Express.js", className: "express" },
    { name: "Firebase", className: "firebase" },
    { name: "PostgreSQL", className: "postgres" },
    { name: "MSSQL", className: "mssql" },
    { name: "SQL", className: "sql" },
    { name: "Python", className: "python" },
    { name: "Pandas", className: "pandas" },
    { name: "NumPy", className: "numpy" },
    { name: "Git", className: "git" },
    { name: "GitHub", className: "github" },
    { name: "Jira", className: "jira" },
    { name: "VS Code", className: "vscode" },
    { name: "Vercel", className: "vercel" }
  ];

  return (
      <>
    <Helmet>
      <title>Rahim Kurt | Yazılım Geliştirici</title>
      <meta name="description" content="Rahim Kurt'un kişisel portföy sitesi. Mobil ve web teknolojileriyle geliştirilen projeleri inceleyin." />
    </Helmet>
    
    <div className="home-container">
      <motion.section className="intro-section" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="intro-left">
          <h1 className="intro-title">
            <span className="wave">👋</span> {t('intro.greeting')}<br />
            <span className="name-highlight">{t('intro.name')}</span>
          </h1>
          <p>{t('intro.description')}</p>
        </div>
        <motion.div className="intro-right" whileHover={{ scale: 1.05 }}>
          <img src="/rahim-intro.jpg" alt="Rahim Tanıtım Görseli" />
        </motion.div>
      </motion.section>

      <motion.section className="experience-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <h2>{t('experience.title')}</h2>
        <div className="experience-items">
          {['uni', 'bilgiyon', 'freelance'].map((key) => (
            <motion.div className="experience-box" key={key} whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }}>
              <div className="experience-header">
                <h3>{t(`experience.${key}.title`)}</h3>
                <div className="experience-date">{t(`experience.${key}.date`)}</div>
              </div>
              <p>{t(`experience.${key}.content`)}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="journey-section">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          {t('journey.title')}
        </motion.h2>
        <p>{t('journey.subtitle')}</p>
        <div className="cards">
          {[1, 2, 3].map((card, index) => (
            <motion.div
              key={card}
              className={`card ${eval(`expanded${card}`) ? 'expanded' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <img src={`/gelisim${card}.jpeg`} alt={`Gelişim ${card}`} />
              <h3>{t(`journey.card${card}.title`)}</h3>
              <p>{t(`journey.card${card}.text`)}</p>
              <button className="read-more-btn" onClick={() => eval(`setExpanded${card}(!expanded${card})`)}>
                {eval(`expanded${card}`) ? t('journey.button.hide') : t('journey.button.show')}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section className="career-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <h2>{t('career.title')}</h2>
        <div className="career-text">
          <p>{t('career.text')}</p>
        </div>
      </motion.section>

      <section className="skills-section">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>{t('skills.title')}</motion.h2>
        <motion.div className="skills-grid" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          {techSkills.map(skill => (
            <motion.div whileHover={{ scale: 1.1 }} className={`skill ${skill.className}`} key={skill.name}>{skill.name}</motion.div>
          ))}
        </motion.div>
      </section>

      <footer className="footer">
        <div className="footer-socials">
          <a href="https://linkedin.com/in/rahimkurt" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/rahimkurt7" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
          <a href="https://instagram.com/rahimkurt" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="https://wa.me/905538655052" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
        </div>
        <div className="footer-contact">
          <a href="mailto:rahimkurt.7@gmail.com">rahimkurt.7@gmail.com</a> — <strong>Rahim Kurt</strong>
        </div>
        <div className="footer-copy">© 2025 {t('footer.copy')}</div>
      </footer>
    </div>
  </> );
 
}

export default Home;
