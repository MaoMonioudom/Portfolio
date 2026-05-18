import { motion } from 'framer-motion';
import { MdArrowForward } from 'react-icons/md';
import dino1 from '../../assets/dinos/dino1.png';
import dino2 from '../../assets/dinos/dino2.png';
import dino3 from '../../assets/dinos/dino3.png';
import dino4 from '../../assets/dinos/dino4.png';
import dino5 from '../../assets/dinos/dino5.png';
import './Hero.css';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="hero" id="home">
      <motion.div
        className="content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="title" variants={itemVariants}>
          Heyy!! 😆
        </motion.h1>
        
        <motion.p className="subtitle" variants={itemVariants}>
          This is a place called playground for my frontend development experiments. I love creating fun, interactive web experiences that bring a smile to your face. Dive in and explore my projects!
        </motion.p>

        <motion.p className="description" variants={itemVariants}>
          Welcome to my digital playground! LOL, just want to show you off my small projects.
        </motion.p>

        <motion.div
          className="buttonGroup"
          variants={itemVariants}
        >
          <motion.button
            className="primaryBtn"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Click Me!
          </motion.button>
          
          <motion.button
            className="secondaryBtn"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            Hehe
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="decoration"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Main center dino */}
        <motion.img 
          src={dino1} 
          alt="Dino 1" 
          className="mainDino"
          animate={{ rotate: [0, 5, -5, 0], y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        {/* Extra dinos scattered */}
        <motion.img
          src={dino3}
          alt="Dino 3"
          className="scatterDino1"
          animate={{ y: [0, 15, 0], rotate: [10, -10, 10] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        <motion.img
          src={dino4}
          alt="Dino 4"
          className="scatterDino2"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        
        <motion.img
          src={dino5}
          alt="Dino 5"
          className="scatterDino3"
          animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </motion.div>

      {/* Dino decorations */}
      <motion.img
        src={dino1}
        alt="Dino 1"
        className="dino1"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.img
        src={dino2}
        alt="Dino 2"
        className="dino2"
        animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </section>
  );
};
