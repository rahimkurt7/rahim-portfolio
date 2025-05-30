import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projectList = [
  {
    title: 'Retro Tool',
    short: 'Takım içi geribildirim yönetim aracı',
     details: [
      'Takım içi retrospektif toplantılar için geliştirilen kapsamlı bir uygulamadır.',
      'Kullanıcılar post-it kartları oluşturabilir, bu kartları kategoriye göre gruplayabilir ve takım üyeleriyle paylaşabilir.',
      'Her kategori (Mad, Sad, Glad, Learned, Suggestion) kendi panelinde gösterilir ve kartlara emoji atanabilir.',
      'Kullanıcılar grafik sayfasında sprint verilerini analiz edebilir, kullanıcı/kategori/sprint filtrelemeleriyle özelleştirilmiş grafikler görüntüleyebilir.',
      'Export özelliği sayesinde bu verileri PDF veya Excel olarak dışa aktarabilir.',
      'Geliştirici modülü sayesinde admin yetkileri atanabilir, MS Teams entegrasyonu ile toplantı linkleri düzenlenebilir.',
      'React (frontend), .NET Core (backend) ve MSSQL (veritabanı) teknolojileriyle geliştirildi.',
      'JWT kimlik doğrulama, yetkili kullanıcı kontrolü ve dinamik UI/UX ile güçlü bir yazılım deneyimi sunar.'
    ],
    images: ['/r0.png', '/r1.png','/r2.png', '/r3.png','/r4.png', '/r5.png','/r6.png'],
      link: 'https://github.com/rahimkurt7/RetroTool'
  },
  {
    title: 'KYK Yemek Menüsü',
    short: '81 il için KYK yemek bilgilerini sunan uygulama',
    details: [
       'Flutter teknolojisiyle geliştirilen bu mobil uygulama, kullanıcıların bulundukları şehre göre Firebase Firestore veritabanından günlük kahvaltı ve akşam yemeği menülerini görüntülemelerine olanak tanır. Şehir seçimi, sabah/akşam seçimi ve tarih filtresi gibi özelliklerle esnek veri erişimi sağlanır.',

  'Uygulama geliştirme sürecinde Flutter framework’ü kullanılmış, arayüz tasarımları Material Design ilkeleriyle oluşturulmuştur. Veriler Firebase Firestore’dan dinamik olarak çekilmekte, bildirimler için Flutter Local Notifications paketi ve zamanlama için Android AlarmManager kullanılmıştır. Kullanıcı ayarları SharedPreferences üzerinden kalıcı olarak saklanmaktadır.',

    ],
    images: ['/kyk0.jpg', '/kyk2.jpg','/kyk1.jpg', '/kyk3.jpg','/kyk4.jpg', '/kyk1.jpg']
  },
  {
    title: 'VR Yangın Simülasyonu',
    short: 'VR tabanlı eğitim simülasyonu',
    details: [
      'Unity ve C# kullanılarak geliştirilen bu proje, sanal gerçeklik (VR) gözlükleri aracılığıyla kullanıcıların yangın söndürme pratiği yapabilmesini sağlar. Gerçek zamanlı etkileşim ve sürükleyici deneyim sunarak kullanıcıyı olayın içine çeker.',

  'Proje, kurum içi eğitimlerde kullanılması amacıyla tasarlanmış olup, özellikle yangın anında doğru müdahale becerilerinin kazandırılmasını hedefler. Gerçekçi ortam modellemeleri, yangın simülasyonları ve kullanıcı yönlendirmeleri ile eğitim sürecine katkı sağlar.',

  'TÜBİTAK destekli bu proje, iş sağlığı ve güvenliği alanında yenilikçi bir çözüm sunmayı amaçlar. Eğitim verimliliğini artırmak ve pratik öğrenme fırsatı yaratmak için geliştirilmiştir.'
    ],
    images: ['/t1.jpeg', '/t2.jpeg', '/t3.jpeg']
  },
  {
    title: 'ŞikayetVar Klonu',
    short: 'Kullanıcı-şirket iletişim platformu',
    details: [
      'HTML, CSS, JavaScript ve Bootstrap kullanılarak geliştirilen bu web tabanlı projede, kullanıcıların sisteme şikayet girişi yapabilmeleri ve firmaların bu şikayetlere yanıt verebilmeleri sağlanmıştır.',

  'Kullanıcı dostu arayüzü ve temel form işlevleriyle, etkileşimli bir şikayet yönetim süreci simüle edilmiştir. Kullanıcılar kolayca şikayet oluşturabilirken, firmalar da yanıtlarını sistem üzerinden görüntüleyebilir.',

  'Bu proje, basit bir şikayet yönetim sistemi simülasyonu olarak tasarlanmış olup, müşteri hizmetleri ve kullanıcı etkileşimi konularında temel bir deneyim sunmayı amaçlamaktadır.'
    ],
    images: ['/images/sikayet1.jpg']
  },
  {
    title: 'Adım Sayar Uygulaması',
    short: 'Mobil adım takip aracı',
    details: [
      'React Native ve Expo ile geliştirildi.',
      'Cihazın sensörlerinden alınan verilerle adım sayımı yapılır.',
      'Kullanıcılara gün içi yürüyüş takibi ve mesafe analizi sunar.'
    ],
    images: ['/a0.jpeg','/a1.png','/a2.png']
  },
  {
    title: 'Mobil Rota Uygulaması',
    short: 'Sporcular için konum tabanlı rota uygulaması',
    details: [
    'Bu mobil uygulama, çapraz platform desteği sunan React Native teknolojisi kullanılarak geliştirilmiştir. Modern kullanıcı arayüzü ve performans odaklı yapısı sayesinde hem Android hem de iOS cihazlarda sorunsuz çalışmaktadır.',
  'Uygulama; kullanıcının konum bilgilerini alarak günlük adım sayısını ve yürüyüş rotasını gerçek zamanlı olarak takip eder. Cihazın sensörleri ve konum servisleri ile entegre çalışan adım sayacı, günlük aktiviteyi otomatik olarak hesaplar. Ayrıca harita tabanlı rota takibi ile kullanıcının geçmiş hareketleri görselleştirilebilir.',
  'Firebase altyapısı sayesinde kullanıcı verileri bulut ortamında saklanır ve senkronize edilir. Böylece farklı cihazlarda bile kullanıcı verileri kaybolmadan korunur. Uygulama, kişisel sağlık takibi ve hareket izleme konusunda kullanıcıya pratik bir dijital asistan deneyimi sunar.'
    ],
    images: ['/o0.jpeg','/o1.jpeg','/o2.jpeg','/o3.jpeg',]
  },
  {
    title: 'Banka Otomasyonu',
    short: 'Müşteri ve hesap yönetimi sistemi',
    details: [
      'Bu masaüstü uygulama, C# programlama dili ve SQL Server veritabanı kullanılarak geliştirilmiştir. Katmanlı mimari yapısıyla, hem veri yönetimi hem de kullanıcı etkileşimi açısından ölçeklenebilir bir sistem sunmaktadır.',
  'Uygulama içerisinde müşteri kayıt işlemleri, yeni hesap açma, hesaplar arası para transferi, bakiye görüntüleme ve işlem geçmişi gibi bankacılık fonksiyonları yer almaktadır. Tüm finansal işlemler, SQL Server üzerinde güvenli bir şekilde kaydedilir ve yönetilir.',
  'Kullanıcı dostu arayüzü sayesinde bankacılık işlemleri sade, anlaşılır ve gerçekçi bir şekilde simüle edilmiştir. Bu proje, temel bankacılık sistemlerinin nasıl çalıştığını kavramak isteyenler için öğretici ve uygulamalı bir örnek niteliğindedir.'
    ],
    images: []
  },
  {
    title: 'Hastane Otomasyonu',
    short: 'Hasta ve doktor yönetim sistemi',
    details: [
      'Bu masaüstü uygulama, C# programlama dili ve PostgreSQL veritabanıyla iletişim sağlayan Npgsql kütüphanesi kullanılarak geliştirilmiştir. Proje, modern yazılım mimarileri göz önünde bulundurularak katmanlı yapı şeklinde tasarlanmıştır.',
  'Uygulama; hasta kayıt işlemleri, randevu oluşturma ve yönetme, doktor bilgilerini düzenleme ve listeleme, poliklinik seçimi gibi birçok temel hastane içi işlevi kapsamaktadır. Kullanıcı arayüzü aracılığıyla yeni hasta kaydı alınabilir, mevcut hastalara randevu tanımlanabilir ve doktorlara göre filtreleme yapılabilir. Tüm veriler güvenli bir şekilde PostgreSQL veritabanında saklanmaktadır.',
  'Bu proje, küçük ve orta ölçekli sağlık kuruluşlarında kullanılabilecek düzeyde, hastane içi süreçlerin dijital ortamda takibini ve yönetimini sağlayan işlevsel bir otomasyon sistemidir. Rutin işlemleri hızlandırmak, veri bütünlüğünü korumak ve kullanıcı dostu bir deneyim sunmak amacıyla geliştirilmiştir.'
    ],
    images: []
  },
  {
    title: 'Öğrenci Ders Otomasyonu',
    short: 'Öğrenci dersi ve not bilgisi yönetimi',
    details: [
     
  'C# programlama dili ve PostgreSQL veritabanı için Npgsql kütüphanesi kullanılarak geliştirilen bu masaüstü uygulama, temel bir öğrenci bilgi sistemi işlevi görmektedir.',
  'Uygulama; öğrenci ekleme, ders atama, not girişi ve not görüntüleme gibi modülleri içermektedir. Kullanıcı arayüzü üzerinden kolayca veri girişi yapılabilir ve güncel bilgiler sistemde takip edilebilir.',
  'Basit arayüzüne rağmen işlevselliği yüksek olan bu proje, öğrenci işleri yönetim süreçlerinin dijital ortama aktarılması konusunda temel bir örnek teşkil etmektedir.'


    ],
    images: []
  },
  {
    title: 'Arduino ile Pong Game',
    short: 'Arduino ile geliştirilmiş fiziksel oyun',
    details: [
     
  'Arduino geliştirme kartı kullanılarak klasik Pong oyunu donanım tabanlı olarak geliştirildi. Bu proje, mikrodenetleyici ile oyun mantığının nasıl entegre edileceğini uygulamalı olarak göstermektedir.',
  'Oyunun top ve paddle (raket) animasyonları, LED matrix ekran üzerinde gerçek zamanlı olarak görüntülenmektedir. Kullanıcı, butonlar aracılığıyla paddle’ı kontrol edebilir ve topun hareketine tepki verebilir.',
  'Bu çalışma, donanım tabanlı oyun geliştirme konusunda temel bir pratik sunmakta olup, hem elektronik hem de yazılım bileşenlerinin birlikte çalıştığı interaktif bir oyun deneyimi sağlamaktadır.'


    ],
    images: []
  }
];

function Projects() {
  const [selected, setSelected] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreenImg, setFullscreenImg] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % selected.images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + selected.images.length) % selected.images.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStartX) return;
    const touchEndX = e.touches[0].clientX;
    const diffX = touchStartX - touchEndX;

    if (diffX > 50) {
      handleNext();
      setTouchStartX(null);
    } else if (diffX < -50) {
      handlePrev();
      setTouchStartX(null);
    }
  };
  useEffect(() => {
    if (selected !== null) {
      // Geri tuşu için sahte bir history kaydı ekle
      window.history.pushState({ modalOpen: true }, '');
    }

    const handlePopState = (event) => {
      if (selected !== null) {
        setSelected(null);
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      if (selected !== null) {
        window.history.back();
      }
    };
  }, [selected]);
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projelerim</h2>
      <div className="projects-grid">
        {projectList.map((proj, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              setSelected(proj);
              setActiveIndex(0);
            }}
          >
            <h3>{proj.title}</h3>
            <p>{proj.short}</p>
          </motion.div>
        ))}
      </div>

      {selected && (
        <div className="project-modal" onClick={() => setSelected(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <button className="close-button" onClick={() => setSelected(null)}>\u2715</button>
            <h3>{selected.title}</h3>
            <ul>
              {selected.details.map((line, i) => <li key={i}>{line}</li>)}
            </ul>
            {selected.link && (
              <p style={{ marginTop: '1rem' }}>
                <a href={selected.link} target="_blank" rel="noopener noreferrer" style={{ color: '#00e6e6', textDecoration: 'underline' }}>
                  Proje GitHub Sayfas\u0131 \u2197
                </a>
              </p>
            )}
            {selected.images.length > 0 && (
              <div className="modal-gallery">
                <button className="nav-button left" onClick={handlePrev}>\u2BD8</button>
                <img 
                  src={selected.images[activeIndex]} 
                  alt={`project-${activeIndex}`} 
                  onClick={() => setFullscreenImg(selected.images[activeIndex])} 
                  style={{ cursor: 'zoom-in' }} 
                />
                <button className="nav-button right" onClick={handleNext}>\u2BD9</button>
              </div>
            )}
          </div>
        </div>
      )}

      {fullscreenImg && (
        <div className="fullscreen-overlay" onClick={() => setFullscreenImg(null)}>
          <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setFullscreenImg(null)}>\u2715</button>
            <img src={fullscreenImg} alt="fullscreen" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
