import React, { useState, useEffect } from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'Retro Tool',
    description: 'Takım içi geribildirim yönetim aracı',
    images: ['/r0.png', '/r1.png', '/r2.png', '/r3.png', '/r4.png', '/r5.png', '/r6.png'],
    features: [
      'Retrospektif toplantılar için post-it kart oluşturma ve kategorilere ayırma',
      'Mad, Sad, Glad, Learned, Suggestion panelleri',
      'Sprint bazlı grafikler ve kullanıcı/kategori/sprint filtreleme',
      'Export: PDF / Excel',
      'Admin paneli, MS Teams entegrasyonu',
      'React (.frontend), .NET Core (backend), MSSQL',
      'JWT kimlik doğrulama ve dinamik UI/UX'
    ]
  },
  {
    title: 'KYK Yemek Menüsü',
    description: 'Flutter ile geliştirilen, günlük menü takibi',
    images: ['/kyk0.jpg', '/kyk2.jpg', '/kyk1.jpg', '/kyk3.jpg', '/kyk4.jpg', '/kyk1.jpg'],
    features: [
      'Flutter & Firebase ile şehir bazlı sabah/akşam menü görüntüleme',
      'Tarih filtresi ve kullanıcı ayarlarını SharedPreferences ile kaydetme',
      'Bildirim sistemleri (AlarmManager, Local Notifications)',
      'Material Design UI'
    ]
  },
  {
    title: 'VR Yangın Simülasyonu',
    description: 'VR tabanlı eğitim simülasyonu',
    images: ['/t1.jpeg', '/t2.jpeg', '/t3.jpeg'],
    features: [
      'Unity ve C# ile geliştirilen yangın söndürme uygulaması',
      'Gerçek zamanlı etkileşim ve VR gözlük desteği',
      'TÜBİTAK destekli, iş sağlığı ve güvenliği eğitimi için tasarlandı'
    ]
  },
  {
    title: 'ŞikayetVar Klonu',
    description: 'Kullanıcı-şirket iletişim platformu',
    images: ['/images/sikayet1.jpg'],
    features: [
      'HTML, CSS, JavaScript ve Bootstrap ile temel şikayet yönetim sistemi',
      'Kullanıcı ve firma etkileşimi, form tabanlı şikayet oluşturma'
    ]
  },
  {
    title: 'Adım Sayar Uygulaması',
    description: 'Mobil adım takip aracı',
    images: ['/a0.jpeg', '/a1.png', '/a2.png'],
    features: [
      'React Native ve Expo ile geliştirildi',
      'Cihaz sensörlerinden alınan verilerle adım sayımı',
      'Mesafe analizi ve günlük yürüyüş takibi'
    ]
  },
  {
    title: 'Mobil Rota Uygulaması',
    description: 'Sporcular için konum tabanlı rota uygulaması',
    images: ['/o0.jpeg', '/o1.jpeg', '/o2.jpeg', '/o3.jpeg'],
    features: [
      'React Native ile geliştirildi, konum tabanlı adım sayacı',
      'Firebase entegrasyonu, geçmiş rota takibi',
      'Sağlık takibi için kullanıcı dostu arayüz'
    ]
  },
  {
    title: 'Banka Otomasyonu',
    description: 'Müşteri ve hesap yönetimi sistemi',
    images: [],
    features: [
      'C# ve SQL Server ile masaüstü uygulama',
      'Müşteri kayıt, hesap açma, para transferi, bakiye görüntüleme',
      'Katmanlı mimari ve güvenli veri yönetimi'
    ]
  },
  {
    title: 'Hastane Otomasyonu',
    description: 'Hasta ve doktor yönetim sistemi',
    images: [],
    features: [
      'C# ve PostgreSQL ile geliştirildi, Npgsql kullanıldı',
      'Hasta/doktor/randevu yönetimi, poliklinik işlemleri',
      'Katmanlı yapı ve kullanıcı dostu arayüz'
    ]
  },
  {
    title: 'Öğrenci Ders Otomasyonu',
    description: 'Öğrenci dersi ve not bilgisi yönetimi',
    images: [],
    features: [
      'C# ve PostgreSQL ile geliştirilen masaüstü uygulama',
      'Öğrenci ekleme, ders atama, not girme ve görüntüleme',
      'Basit ama işlevsel öğrenci bilgi sistemi'
    ]
  },
  {
    title: 'Arduino ile Pong Game',
    description: 'Arduino ile geliştirilmiş fiziksel oyun',
    images: [],
    features: [
      'Arduino ile klasik Pong oyunu donanım tabanlı geliştirildi',
      'LED matrix ekran üzerinde paddle ve top animasyonu',
      'Butonlarla kontrol edilen interaktif oyun deneyimi'
    ]
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === 'Escape' || e.key === 'Backspace') && selectedProject !== null) {
        setSelectedProject(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const openProject = (index) => {
    setSelectedProject(index);
    setImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject !== null) {
      const project = projectData[selectedProject];
      setImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject !== null) {
      const project = projectData[selectedProject];
      setImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-title">Projelerim</h2>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card" onClick={() => openProject(index)}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {selectedProject !== null && (
        <div className="project-modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeProject}>&times;</button>
            <h3>{projectData[selectedProject].title}</h3>
            <ul>
              {projectData[selectedProject].features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {projectData[selectedProject].images.length > 0 && (
              <div className="modal-gallery">
                <button className="nav-button left" onClick={prevImage}>&lt;</button>
                <img src={projectData[selectedProject].images[imageIndex]} alt="Project Screenshot" />
                <button className="nav-button right" onClick={nextImage}>&gt;</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
