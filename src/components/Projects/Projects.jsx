import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import dino1 from '../../assets/dinos/dino1.png';
import dino2 from '../../assets/dinos/dino2.png';
import dino3 from '../../assets/dinos/dino3.png';
import dino4 from '../../assets/dinos/dino4.png';
import dino5 from '../../assets/dinos/dino5.png';
import dino6 from '../../assets/dinos/dino6.png';
import dino7 from '../../assets/dinos/dino7.png';
import './Projects.css';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'An awesome project that showcases my skills',
      tags: ['React', 'CSS', 'Animation'],
      image: '🎨',
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Another cool creation with interactive elements',
      tags: ['JavaScript', 'Design', 'UX'],
      image: '✨',
      github: '#',
      live: '#',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A creative solution that solves real problems',
      tags: ['React', 'APIs', 'Responsive'],
      image: '🚀',
      github: '#',
      live: '#',
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'More amazing work that demonstrates my abilities',
      tags: ['Web', 'Development', 'Innovation'],
      image: '💡',
      github: '#',
      live: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="projects" id="projects">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.h2 className="title" variants={itemVariants}>
          Low-Key Created these by accident
        </motion.h2>

        <motion.div className="grid" variants={containerVariants}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="card"
              variants={itemVariants}
              whileHover={{ y: -10, rotate: -1 }}
            >
              <motion.div
                className="imageContainer"
                whileHover={{ scale: 1.1, rotate: 2 }}
              >
                <div className="emoji">{project.image}</div>
              </motion.div>

              <div className="content">
                <h3 className="cardTitle">{project.title}</h3>
                <p className="description">{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="footer">
                <motion.a
                  href={project.github}
                  className="link"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub size={20} />
                </motion.a>
                <motion.a
                  href={project.live}
                  className="link"
                  whileHover={{ scale: 1.1, rotate: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink size={20} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Dino decorations - LOTS of them! */}
      <motion.img
        src={dino1}
        alt="Dino decoration"
        className="dino1"
        animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.img
        src={dino2}
        alt="Dino decoration"
        className="dino2"
        animate={{ y: [0, 20, 0], x: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.img
        src={dino3}
        alt="Dino decoration"
        className="dino3"
        animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.img
        src={dino4}
        alt="Dino decoration"
        className="dino4"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.img
        src={dino5}
        alt="Dino decoration"
        className="dino5"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.img
        src={dino6}
        alt="Dino decoration"
        className="dino6"
        animate={{ y: [0, -20, 0], x: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.img
        src={dino7}
        alt="Dino decoration"
        className="dino7"
        animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  );
};
