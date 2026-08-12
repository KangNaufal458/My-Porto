import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Code2, Layout, Database, Terminal } from 'lucide-react';
import profileImg from './assets/foto bangZS.jpg';
import siAntingImg from './assets/Interface SI ANTING.jpg';
import siMudiImg from './assets/SI MUDI.png';
import Education from './Education';
import Certificates from './Sertifikat';
import './App.css';

const Github = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projects = [
    {
      title: "Sistem Analisis Deteksi Stanting (SI ANTING)",
      desc: "Platform sistem Informasi yang membantu memonitor dan mendeteksi stunting pada anak.",
      tags: ["Laravel", "Python", "MySQL",],
      link: "https://stunting-app-uas.bilikku.my.id/",
      github: "https://github.com/KangNaufal458/sistem-analisis-anak-stunting.git",
      image: siAntingImg
    },
    {
      title: "Desain UI Mobile App SI MUDI",
      desc: "Antarmuka pengguna aplikasi mobile SI MUDI yang didesain secara elegan dan fungsional.",
      tags: ["Figma", "UI/UX", "Mobile App"],
      link: "https://www.figma.com/design/Jb8MBWYhkE1u8qYMvkjNak/SI-MUDI-Mobile-app?node-id=0-1&t=JVdgVPXya2niOC7R-1",
      github: "",
      image: siMudiImg
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: <Layout size={24} />, desc: "React, Laravel, Flask, Tailwind CSS, Figma" },
    { name: "Backend Development", icon: <Database size={24} />, desc: "Laravel,Python, Flask, MySQL" },
    { name: "API Integration", icon: <Code2 size={24} />, desc: "RESTful API" },
    { name: "DevOps & Tools", icon: <Terminal size={24} />, desc: "Git, GitHub, Figma, Vercel" }
  ];

  return (
    <div className="app-wrapper">
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      {/* Navbar */}
      <nav className="navbar" style={{ background: scrolled ? 'rgba(5,5,5,0.9)' : 'transparent', borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none' }}>
        <div className="app-container nav-content">
          <div className="logo gradient-text">Bang ZS Portofolio</div>
          <ul className="nav-links">
            <li><a href="#about" className="nav-link">Tentang Saya</a></li>
            <li><a href="#education" className="nav-link">Pendidikan</a></li>
            <li><a href="#certificates" className="nav-link">Sertifikat</a></li>
            <li><a href="#projects" className="nav-link">Projek</a></li>
            <li><a href="#contact" className="nav-link">Kontak</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="app-container hero-grid">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeIn} className="hero-greeting">Hi, Saya Naufal 👋</motion.span>
            <motion.h1 variants={fadeIn} className="hero-title">
              Aku ingin melihat senyuman semua orang <span className="gradient-text">Karena itu, aku ingin terus bertarung!"</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="hero-description">
              Halo semuanya, perkenalkan saya Naufal Zanuwar Sudarto, saya adalah mahasiswa Teknik Informatika dari kampus STMIK AMIKOM SURAKARTA yang berfokus pada front-end development dan web developer. Selain itu, saya juga memiliki sedikit skill multimedia di bidang editing video dan desain grafis karena di SMK saya mengambil jurusan Multimedia.
              Saya memiliki ketertarikan besar pada slicing desain Figma menjadi komponen web interaktif, presisi, dan inklusif. Saya percaya bahwa teknologi terbaik adalah teknologi yang mampu merekatkan dan membawa dampak nyata bagi manajemen bisnis.
            </motion.p>
            <motion.div variants={fadeIn} className="hero-actions">
              <a href="#projects" className="btn btn-primary">Lihat Portfolio</a>
              <a href="#contact" className="btn btn-outline">Hubungi Saya</a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="image-wrapper">
              <div className="glow-effect"></div>
              <img src={profileImg} alt="Bang ZS" className="profile-img" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills / About Section */}
      <section id="about">
        <div className="app-container">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="section-title"
          >
            Keahlian & <span className="gradient-text">Layanan</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-2"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={fadeIn} className="glass-card">
                <div style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>
                  {skill.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{skill.name}</h3>
                <p style={{ color: '#a0a0a0', fontSize: '0.95rem' }}>{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Education />
      <Certificates />

      {/* Projects Section */}
      <section id="projects">
        <div className="app-container">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="section-title"
          >
            Proyek <span className="gradient-text">Terbaru</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-3"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeIn} className="glass-card">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-image" />
                ) : (
                  <div className="project-image"></div>
                )}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links" style={{ marginTop: '1.5rem' }}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    <ExternalLink size={16} /> Demo
                  </a>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                      <Github size={16} /> Code
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="app-container">
          <motion.div
            className="glass-card" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          >
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Mari Bekerja <span className="gradient-text">Bersama</span></h2>
            <p style={{ color: '#a0a0a0', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Punya ide proyek atau sekadar ingin berdiskusi? Jangan ragu untuk menghubungi saya!
            </p>
            <a href="mailto:naufalzanuwar@gmail.com" className="btn btn-primary" style={{ marginBottom: '2rem' }}>
              <Mail size={20} /> Kirim Pesan
            </a>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem' }}>
              <a href="https://github.com/KangNaufal458" target="_blank" rel="noopener noreferrer" style={{ color: '#a0a0a0', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#a0a0a0'}><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/naufal-zanuwar-sudarto-553a35376" target="_blank" rel="noopener noreferrer" style={{ color: '#a0a0a0', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#a0a0a0'}><Linkedin size={24} /></a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer>
        <div className="app-container">
          <p>© {new Date().getFullYear()} Naufal. Crafting clean user experiences, engineered from logic, built for connection.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
