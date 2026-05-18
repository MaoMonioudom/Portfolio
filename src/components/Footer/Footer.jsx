import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import dino1 from '../../assets/dinos/dino1.png';
import dino2 from '../../assets/dinos/dino2.png';
import dino3 from '../../assets/dinos/dino3.png';
import dino5 from '../../assets/dinos/dino5.png';
import dino6 from '../../assets/dinos/dino6.png';
import dino7 from '../../assets/dinos/dino7.png';
import dino8 from '../../assets/dinos/dino8.png';
import dino9 from '../../assets/dinos/dino9.png';
import './Footer.css';

export const Footer = () => {
  const socials = [
    { icon: FiGithub, label: 'GitHub', href: '#' },
    { icon: FiLinkedin, label: 'LinkedIn', href: '#' },
    { icon: FiTwitter, label: 'Twitter', href: '#' },
    { icon: FiMail, label: 'Email', href: 'mailto:hello@example.com' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="footer" id="contact">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 className="title" variants={itemVariants}>
          Let's Connect! Yeyy!!
        </motion.h2>

        <motion.p className="subtitle" variants={itemVariants}>
          Let's creat bond!! Hehe, Oudom always open to chat with you all !!
        </motion.p>

        <motion.div className="socials" variants={containerVariants}>
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                className="socialLink"
                variants={itemVariants}
                whileHover={{ scale: 1.2, rotate: 8 }}
                whileTap={{ scale: 0.9 }}
                title={social.label}
              >
                <Icon size={24} />
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div className="divider" variants={itemVariants} />

        <motion.p className="copyright" variants={itemVariants}>
          © 2026 Monioudom with love and dinos 🦕🦖
        </motion.p>
      </motion.div>

      {/* Dino decorations - LOTS of them! */}
      <motion.img
        src={dino1}
        alt="Dino decoration"
        className="footerDino1"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.img
        src={dino2}
        alt="Dino decoration"
        className="footerDino2"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.img
        src={dino3}
        alt="Dino decoration"
        className="footerDino3"
        animate={{ y: [0, 18, 0], x: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.img
        src={dino5}
        alt="Dino decoration"
        className="footerDino5"
        animate={{ rotate: [0, -12, 12, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.img
        src={dino6}
        alt="Dino decoration"
        className="footerDino6"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.img
        src={dino7}
        alt="Dino decoration"
        className="footerDino7"
        animate={{ x: [0, 12, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.img
        src={dino8}
        alt="Dino decoration"
        className="footerDino8"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.img
        src={dino9}
        alt="Dino footer decoration"
        className="footerDino"
        animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </footer>
  );
};
