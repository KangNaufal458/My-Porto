import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import './Education.css';

// Import logos
import logoAmikom from './assets/Amikom Solo.png';
import logoSmk from './assets/smkmuh 2 klaten utara.jpg';
import logoSmp from './assets/logo smp4.png';
import logoSd from './assets/bareng4.jpg';
import logoTk from './assets/tk pelangi nusa.png';

const educationData = [
  {
    id: 1,
    school: "STMIK AMIKOM SURAKARTA",
    year: "Saat ini",
    details: "S1 Teknik Informatika",
    image: logoAmikom
  },
  {
    id: 2,
    school: "SMK MUH 2 KLATEN UTARA",
    year: "2020 - 2023",
    details: "Jurusan Multimedia",
    image: logoSmk
  },
  {
    id: 3,
    school: "SMP NEGERI 4 KLATEN",
    year: "2017 - 2020",
    details: "Sekolah Menengah Pertama",
    image: logoSmp
  },
  {
    id: 4,
    school: "SD NEGERI 4 BARENG LOR",
    year: "2011 - 2016",
    details: "Sekolah Dasar",
    image: logoSd
  },
  {
    id: 5,
    school: "KB & TK PELANGI NUSA",
    year: "2010 - 2011",
    details: "Taman Kanak-Kanak",
    image: logoTk
  }
];

const Education = () => {
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

  return (
    <section id="education">
      <div className="app-container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="section-title"
        >
          Riwayat <span className="gradient-text">Pendidikan</span>
        </motion.h2>

        <div className="timeline-container">
          {/* Vertical line */}
          <div className="timeline-line"></div>

          <motion.div
            className="timeline-items"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {educationData.map((item, index) => (
              <motion.div key={item.id} variants={fadeIn} className="timeline-item">
                <div className="timeline-dot">
                  <div className="timeline-dot-inner"></div>
                </div>
                
                <div className="timeline-content glass-card">
                  <div className="timeline-icon">
                    <img src={item.image} alt={`${item.school} Logo`} className="school-logo" />
                  </div>
                  <div className="timeline-text">
                    <h3 className="school-name">{item.school}</h3>
                    <div className="school-year">
                      <Calendar size={14} className="calendar-icon" />
                      <span>{item.year}</span>
                    </div>
                    {item.details && <p className="school-details">{item.details}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
