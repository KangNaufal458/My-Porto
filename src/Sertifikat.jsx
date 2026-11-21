import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Globe, Flag, Eye, X, ExternalLink, Sparkles, Trophy } from 'lucide-react';
import certCodeLab from './assets/Sertif CodeLab.jpg';
import certProxoCORIS from './assets/Sertif ProxoCORIS.jpg';
import certMicrosoftOffice from './assets/26OL00521_NAUFAL ZANUWAR SUDARTO_page-0001.jpg';
import certNvidiaNlp from './assets/NVIDIA CERTIFIET NAUFAL ZS_page-0001.jpg';
import './Sertifikat.css';

const certificatesData = [
  {
    id: 'nvidia-nlp',
    title: 'Sertifikasi NVIDIA: Building Transformer-Based NLP Applications',
    level: 'internasional',
    levelLabel: 'Taraf Internasional',
    issuer: 'NVIDIA',
    category: 'AI & Natural Language Processing',
    description: 'Certificate of Competency dari NVIDIA dalam menyelesaikan pelatihan Building Transformer-Based Natural Language Processing Applications. Membuktikan kompetensi dalam membangun dan menerapkan aplikasi pemrosesan bahasa alami berbasis arsitektur Transformer.',
    image: certNvidiaNlp,
    year: '2026',
    credentialId: 's9Ovns_RR5asBjjT0wmeIQ',
    credentialUrl: 'https://learn.nvidia.com/certificates?id=s9Ovns_RR5asBjjT0wmeIQ'
  },
  {
    id: 'proxocoris',
    title: 'Sertifikat Kompetisi ProxoCORIS',
    level: 'internasional',
    levelLabel: 'Taraf Internasional',
    issuer: 'ProxoCORIS International',
    category: 'Teknologi & Inovasi',
    description: 'Sertifikat pencapaian resmi pada ajang kompetisi teknologi dan sistem informasi tingkat Internasional (ProxoCORIS). Membuktikan kompetensi dan daya saing di kancah global.',
    image: certProxoCORIS,
    year: '2024'
  },
  {
    id: 'microsoft-office',
    title: 'Sertifikasi Applied Microsoft Office',
    level: 'internasional',
    levelLabel: 'Taraf Internasional',
    issuer: 'Trust Training Partners (Microsoft Learning Partner) & STMIK AMIKOM Surakarta',
    category: 'Produktivitas & Office',
    description: 'Sertifikat kelulusan Accelerated Competency Training and Certification (ACTION) Program dalam bidang Applied Microsoft Office dengan standar resmi Microsoft Learning Partner bekerja sama dengan STMIK AMIKOM Surakarta.',
    image: certMicrosoftOffice,
    year: '2026'
  },
  {
    id: 'codelab',
    title: 'Sertifikat Kompetisi CodeLab',
    level: 'nasional',
    levelLabel: 'Taraf Nasional',
    issuer: 'CodeLab National Competition',
    category: 'Coding & Development',
    description: 'Sertifikat keikutsertaan dan apresiasi kompetisi pemrograman serta pengembangan perangkat lunak tingkat Nasional (CodeLab).',
    image: certCodeLab,
    year: '2024'
  }
];

const Certificates = () => {
  const [filter, setFilter] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedCert]);

  const filteredCerts = certificatesData.filter(cert => {
    if (filter === 'all') return true;
    return cert.level === filter;
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="certificates" className="certificates-section">
      <div className="app-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="certificates-header"
        >
          <h2 className="section-title">
            Sertifikat & <span className="gradient-text">Prestasi</span>
          </h2>
          <p className="certificates-subtitle">
            Kumpulan penghargaan dan bukti keikutsertaan dalam perlombaan tingkat Nasional & Internasional di bidang Teknologi Informasi dan Pemrograman.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="cert-filters"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            <Sparkles size={16} /> Semua ({certificatesData.length})
          </button>
          <button 
            className={`filter-btn ${filter === 'internasional' ? 'active' : ''}`}
            onClick={() => setFilter('internasional')}
          >
            <Globe size={16} /> Internasional ({certificatesData.filter(c => c.level === 'internasional').length})
          </button>
          <button 
            className={`filter-btn ${filter === 'nasional' ? 'active' : ''}`}
            onClick={() => setFilter('nasional')}
          >
            <Flag size={16} /> Nasional ({certificatesData.filter(c => c.level === 'nasional').length})
          </button>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div 
          className="cert-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          key={filter}
        >
          {filteredCerts.map((cert) => (
            <motion.div
              key={cert.id}
              variants={fadeIn}
              layout
              className="glass-card cert-card"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Badge */}
              <div className={`cert-badge ${cert.level === 'internasional' ? 'badge-international' : 'badge-national'}`}>
                {cert.level === 'internasional' ? <Globe size={14} /> : <Trophy size={14} />}
                <span>{cert.levelLabel}</span>
              </div>

              {/* Image Preview Container */}
              <div className="cert-image-container">
                <img src={cert.image} alt={cert.title} className="cert-image" />
                <div className="cert-overlay"></div>
              </div>

              {/* Card Body */}
              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-desc">{cert.description}</p>
                
                <div className="cert-footer">
                  <span className="tag" style={{ margin: 0 }}>
                    {cert.category}
                  </span>
                  <div className="cert-view-btn">
                    <Eye size={16} /> Lihat Sertifikat
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                className="modal-close-btn"
                onClick={() => setSelectedCert(null)}
                aria-label="Tutup modal"
              >
                <X size={20} />
              </button>

              <div className="modal-body">
                {/* Image Display */}
                <div className="modal-img-wrapper">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    className="modal-img" 
                  />
                </div>

                {/* Details Info */}
                <div className="modal-info">
                  <div className="modal-header-flex">
                    <div>
                      <div className={`cert-badge ${selectedCert.level === 'internasional' ? 'badge-international' : 'badge-national'}`} style={{ position: 'relative', top: 0, left: 0, marginBottom: '0.75rem' }}>
                        {selectedCert.level === 'internasional' ? <Globe size={14} /> : <Trophy size={14} />}
                        <span>{selectedCert.levelLabel}</span>
                      </div>
                      <h3 className="modal-title">{selectedCert.title}</h3>
                    </div>
                  </div>

                  <p className="modal-desc">{selectedCert.description}</p>

                  <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '1.75rem', color: '#94a3b8', fontSize: '0.9rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem' }}>
                    {selectedCert.issuer && <div><span style={{ color: '#64748b' }}>Penerbit: </span><span style={{ color: '#e2e8f0', fontWeight: 500 }}>{selectedCert.issuer}</span></div>}
                    {selectedCert.year && <div><span style={{ color: '#64748b' }}>Tahun: </span><span style={{ color: '#e2e8f0', fontWeight: 500 }}>{selectedCert.year}</span></div>}
                    {selectedCert.category && <div><span style={{ color: '#64748b' }}>Kategori: </span><span style={{ color: '#e2e8f0', fontWeight: 500 }}>{selectedCert.category}</span></div>}
                    {selectedCert.credentialId && <div><span style={{ color: '#64748b' }}>ID Sertifikasi: </span><span style={{ color: '#e2e8f0', fontWeight: 500 }}>{selectedCert.credentialId}</span></div>}
                  </div>

                  <div className="modal-actions">
                    <a 
                      href={selectedCert.image} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary"
                    >
                      <ExternalLink size={18} /> Buka Ukuran Penuh
                    </a>
                    {selectedCert.credentialUrl && (
                      <a
                        href={selectedCert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                      >
                        <Award size={18} /> Verifikasi Sertifikat
                      </a>
                    )}
                    <button 
                      className="btn btn-outline"
                      onClick={() => setSelectedCert(null)}
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
