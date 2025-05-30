import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Rahim Kurt | Yazılım Geliştirici</title>
        <meta name="description" content="Rahim Kurt'un resmi portföy sitesidir. Mobil ve web geliştirme projeleri, kişisel bilgiler ve iletişim kanalları burada yer alır." />
        <meta name="keywords" content="Rahim Kurt, Yazılım Geliştirici, Web Developer, Mobil Uygulama, React, Flutter, Portföy" />
        <meta name="author" content="Rahim Kurt" />
      </Helmet>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
