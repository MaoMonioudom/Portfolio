import { motion } from 'framer-motion';
import dino1 from '../../assets/dinos/dino1.png';
import dino2 from '../../assets/dinos/dino2.png';
import dino3 from '../../assets/dinos/dino3.png';
import dino4 from '../../assets/dinos/dino4.png';
import dino5 from '../../assets/dinos/dino5.png';
import dino6 from '../../assets/dinos/dino6.png';
import dino7 from '../../assets/dinos/dino7.png';
import dino8 from '../../assets/dinos/dino8.png';
import dino9 from '../../assets/dinos/dino9.png';
import './About.css';

export const About = () => {
  const skills = [
    { icon: '🎨', label: 'Design', items: ['UI/UX', 'Figma', 'Adobe XD'] },
    { icon: '⚛️', label: 'Frontend', items: ['React', 'JavaScript', 'CSS'] },
    { icon: '✨', label: 'Animation', items: ['Framer Motion', 'CSS Animations', 'Interaction'] },
    { icon: '📱', label: 'Responsive', items: ['Mobile First', 'Cross-browser', 'Performance'] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="about" id="about">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.h2 className="title" variants={itemVariants}>
          😶‍🌫️Common, I'm shy!!
        </motion.h2>

        <motion.p className="description" variants={itemVariants}>
          Even I mentioned that I love development, But I'm actually a Data science Stduent though 😫
        </motion.p>

        <motion.div className="skills" variants={containerVariants}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.label}
              className="skillCard"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02, rotate: 1 }}
            >
              <div className="skillIcon">{skill.icon}</div>
              <h3 className="skillLabel">{skill.label}</h3>
              <ul className="skillList">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Dino decorations - LOTS of them! */}
      <motion.img
        src={dino1}
        alt="Dino decoration"
        className="dino1"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.img
        src={dino2}
        alt="Dino decoration"
        className="dino2"
        animate={{ rotate: [0, 12, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.img
        src={dino3}
        alt="Dino decoration"
        className="dino3"
        animate={{ y: [0, 20, 0], x: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.img
        src={dino4}
        alt="Dino decoration"
        className="dino4"
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.img
        src={dino5}
        alt="Dino decoration"
        className="dino5"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.img
        src={dino6}
        alt="Dino decoration"
        className="dino6"
        animate={{ rotate: [0, -8, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.img
        src={dino7}
        alt="Dino decoration"
        className="dino7"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.img
        src={dino8}
        alt="Dino decoration"
        className="dino8"
        animate={{ y: [0, 15, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.img
        src={dino9}
        alt="Dino decoration"
        className="dino9"
        animate={{ scale: [1, 1.08, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  );
};
