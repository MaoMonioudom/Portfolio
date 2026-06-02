import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import dino8 from '../../assets/dinos/dino8.png';
import sixseven from '../../assets/sixseven.png';
import './Header.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const navItems = [
    { label: 'Say Hi', id: 'home' },
    { label: 'Click Me!', id: 'projects' },
    { label: 'Yo! Stop><', id: 'about' },
    { label: 'Always Here 4U', id: 'contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
    handleNavClick();
  };

  return (
    <motion.header
      className="header"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <motion.a
          href="#home"
          className="logo"
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogoClick}
        >
          20+20+20+7 🫴🫴
        </motion.a>

        <nav className={`nav ${isOpen ? 'navOpen' : ''}`}>
          {navItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className="navItem"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5, rotate: 1 }}
              onClick={handleNavClick}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <motion.button
          className="menuToggle"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>

        {/* Dino decoration */}
        <motion.img
          src={dino8}
          alt="Dino header decoration"
          className="headerDino"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Message popup */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            className="logoMessage"
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <img src={sixseven} alt="67" className="logoMessageImage" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
