import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Home.css';

function Home() {
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
    { name: "CI/CD Mantığı", className: "cicd" },
    { name: "Vercel", className: "vercel" },
    { name: "Netlify", className: "netlify" }
  ];

  return (
    <div className="home-container">

     {/* 1. Giriş Alanı */}
<motion.section className="intro-section" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
  <div className="intro-left">
    <h1>Merhaba, ben <span className="highlighted">Rahim Kurt</span></h1>
    <p>
      İzmir Bakırçay Üniversitesi Bilgisayar Mühendisliği mezunuyum. Yazılım geliştirme süreçlerinde sadece mobil çözümlerle değil, aynı zamanda yapay zeka, veritabanı yönetimi ve web teknolojileri alanlarında da etkin şekilde çalışıyorum.
      React ve Flutter ile çapraz platform mobil uygulamalar geliştiriyor; .NET ve Node.js gibi modern altyapılarla API servisleri ve mikroservis mimarileri oluşturuyorum. Firebase ve PostgreSQL gibi sistemlerle veri modelleme, kimlik doğrulama ve gerçek zamanlı veri yönetimi üzerine çözümler üretiyorum.
      Aynı zamanda yapay zeka ve veri bilimi alanına ilgi duyuyor, Python ile makine öğrenmesi projelerinde Pandas, NumPy ve scikit-learn gibi kütüphaneler kullanarak analizler gerçekleştiriyorum. Kullanıcı deneyimini ve sürdürülebilirliği esas alan, teknik olarak sağlam ürünler üretmeyi hedefliyorum.
    </p>
  </div>
  <motion.div className="intro-right" whileHover={{ scale: 1.05 }}>
    <img src="/rahim-intro.jpg" alt="Rahim Tanıtım Görseli" />
  </motion.div>
</motion.section>
<motion.section className="experience-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
  <h2>Deneyim ve Tecrübelerim</h2>
  <div className="experience-items">
    {[
      {
        title: "İzmir Bakırçay Üniversitesi",
        date: "Haziran 2023 – Temmuz 2023",
        content: (
          <>
            Üniversitemizin yürüttüğü kısa dönem yaz stajı kapsamında TÜBİTAK destekli <strong>Mobil Rota ve Adım Sayar Uygulaması</strong> üzerinde çalıştım.
            React Native ile geliştirilen bu projede adım sayacı, harita tabanlı rota izleme, kullanıcı analizi ve Firebase senkronizasyon gibi modülleri üstlendim.
            Proje Gençlik ve Spor Bakanlığı onaylıdır ve resmî olarak kullanıma sunulmuştur.
          </>
        )
      },
      {
        title: "BilgiYön Yazılım ",
        date: "Şubat 2024 – Mayıs 2025",
        content: (
          <>
            Uzun dönem stajımı bu şirkette gerçekleştirdim. Ekip içinde <strong>Retro Tool</strong> adlı geri bildirim ve takım yönetim uygulamasının tüm modüllerinde aktif rol aldım.
            React (frontend), .NET Core (backend), MSSQL (veritabanı) kullanarak post-it kart yönetimi, grafik çizimi, anket modülü ve PDF/Excel dışa aktarma gibi özellikleri geliştirdim.
            Jira ile görev takibi ve Git ile sürüm kontrolü süreçlerine aktif olarak katkı sağladım.
          </>
        )
      },
      {
        title: "Bionluk & Fiverr",
        date: "2022 – Hâlen",
        content: (
          <>
            Freelancer olarak çeşitli mobil ve web projeleri geliştirdim. Flutter, React Native, Firebase ve WordPress teknolojileriyle bireysel ve kurumsal çözümler sundum.
            <strong>Fiverr</strong> üzerinden yurt dışı müşterilerle çalışarak, proje teslimi, iletişim ve müşteri memnuniyeti alanında profesyonel deneyim kazandım.
            Genellikle mobil uygulama geliştirme, chatbot kurulumları, Firebase ile backend yapılandırma gibi talepleri tamamladım.
          </>
        )
      }
    ].map((exp, index) => (
      <motion.div
        className="experience-box"
        key={index}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <div className="experience-header">
          <h3>{exp.title}</h3>
          <span className="experience-date">{exp.date}</span>
        </div>
        <p>{exp.content}</p>
      </motion.div>
    ))}
  </div>
</motion.section>

      {/* 2. Gelişim Yolculuğum */}
<section className="journey-section">
  <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
    Gelişim Yolculuğum
  </motion.h2>
  <p>Farklı projelerde edindiğim deneyimleri birleştirerek, sürdürülebilir çözümler geliştiriyorum.</p>
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
        <h3>{[
          'Gerçek Projelerle Deneyim',
          'Yazılım Süreçlerinde Ustalık',
          'Mobil Dünyaya Dokunuş',
        ][card - 1]}</h3>
        <p>
          {[
            <>
              <p>C#, SQL, Python ve JavaScript dillerini gerçek projelerde aktif olarak kullandım.
              Masaüstü otomasyon sistemlerinden web tabanlı platformlara kadar farklı teknolojik ihtiyaçlara çözüm üreten uygulamalar geliştirdim.
              Veritabanı yönetimi, API entegrasyonu, kullanıcı arayüzü tasarımı ve veri analizi konularında uygulamalı deneyim sahibiyim.</p>
            </>,
            <>
              <p>Yazılım geliştirme sürecinde analizden dağıtıma kadar olan tüm aşamalara hâkimim.
              Projelerimi genellikle yazılım yaşam döngüsünün temel basamakları olan ihtiyaç analizi, sistem tasarımı, kodlama, test, dağıtım ve bakım adımlarına uygun şekilde yürütüyorum.
              Jira gibi araçlarla görev ve sprint yönetimini sağlarken; Git ile versiyon kontrolünü etkin biçimde kullanarak takım içi iş akışlarını koordine ediyorum.</p>
            </>,
            <>
              <p>React Native ve Flutter teknolojileriyle hem Android hem iOS platformları için performanslı ve kullanıcı dostu mobil uygulamalar geliştiriyorum.
              Expo ve Firebase gibi modern altyapılarla uygulamalara kimlik doğrulama, gerçek zamanlı veri yönetimi ve bildirim gibi işlevler kazandırıyorum.
              GSB onaylı rota takip sistemi, adım sayar gibi sağlık temelli projeler ve KYK yemek menüsü uygulaması gibi günlük hayatı kolaylaştıran çözümler geliştirerek hem bireysel hem ekip bazlı deneyim kazandım.</p>
            </>
          ][card - 1]}
        </p>
        <button className="read-more-btn" onClick={() => eval(`setExpanded${card}(!expanded${card})`)}>
          {eval(`expanded${card}`) ? "Daha Az Göster" : "Devamını Gör"}
        </button>
      </motion.div>
    ))}
  </div>
</section>
      {/* 3. Kariyer Hedeflerim */}
<motion.section className="career-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
  <h2>Kariyer Hedeflerim</h2>
  <div className="career-text">
    <p>
      Yazılım geliştirme sürecine yalnızca bir mühendislik pratiği olarak değil, aynı zamanda insan hayatını kolaylaştıran yaratıcı bir sanat olarak yaklaşıyorum. Kod yazmak benim için bir araç; asıl hedefim ise işlevsel, kullanıcı dostu ve sürdürülebilir ürünler geliştirmek.
      Kariyerimin ilk yıllarında mobil ve web teknolojilerinde derinleşerek kullanıcı ihtiyaçlarını doğru analiz etmeyi, hızlı prototipler üretmeyi ve geri bildirim odaklı iteratif geliştirme yapmayı öğreniyorum. Özellikle React, Flutter ve Firebase gibi modern teknolojileri aktif olarak kullanarak ürün geliştirme süreçlerinde uçtan uca sorumluluk almayı deneyimliyorum.
      Orta vadede teknik liderlik, yazılım mimarisi ve ürün yönetimi gibi alanlara yönelerek ekip yönetimi, proje planlama ve teknolojik karar süreçlerinde etkin rol oynamayı hedefliyorum. Agile prensiplerine bağlı kalarak hem takım içi koordinasyonu hem de müşteri odaklı çözüm üretmeyi öncelik ediniyorum.
      Uzun vadede ise teknoloji vizyonu olan şirketlerde lider pozisyonlarda yer alarak, inovatif ve ölçeklenebilir yazılım çözümleri üretmek; genç geliştiricilere mentorluk yaparak sektörün gelişimine katkı sunmak istiyorum.
    </p>
  </div>
</motion.section>


      {/* 4. Teknolojiler ve Yetenekler */}
      <section className="skills-section">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>Teknolojiler</motion.h2>
        <motion.div className="skills-grid" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          {techSkills.map(skill => (
            <motion.div whileHover={{ scale: 1.1 }} className={`skill ${skill.className}`} key={skill.name}>{skill.name}</motion.div>
          ))}
        </motion.div>
      </section>

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

  <div className="footer-copy">© 2025 Tüm Hakları Saklıdır</div>
</footer>

</div>
    
  );
}

export default Home;