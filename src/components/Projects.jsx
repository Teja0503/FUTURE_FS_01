import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Apps', 'E-commerce', 'Mobile', 'Design'];

  const projects = [
    {
      id: 1,
      title: 'NeuroFlow AI Platform',
      category: 'Web Apps',
      description: 'Revolutionary AI-powered mental health platform with real-time analytics and personalized therapy recommendations.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'AI/ML', 'PostgreSQL'],
      featured: true,
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
    {
      id: 2,
      title: 'Luxe Fashion Marketplace',
      category: 'E-commerce',
      description: 'Premium fashion e-commerce platform with AR try-on features and blockchain authentication.',
      image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Stripe', 'AR.js', 'Blockchain'],
      featured: true,
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
    {
      id: 3,
      title: 'Zenith Fitness App',
      category: 'Mobile',
      description: 'Comprehensive fitness tracking app with social features and AI-powered workout recommendations.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'TensorFlow', 'Redux'],
      featured: false,
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
    {
      id: 4,
      title: 'Quantum Design System',
      category: 'Design',
      description: 'Comprehensive design system and component library used across 50+ enterprise applications.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Figma', 'Storybook', 'React', 'TypeScript'],
      featured: false,
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
    {
      id: 5,
      title: 'CryptoVault Dashboard',
      category: 'Web Apps',
      description: 'Real-time cryptocurrency portfolio management with advanced analytics and trading insights.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'D3.js', 'WebSocket', 'Python'],
      featured: false,
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    },
    {
      id: 6,
      title: 'EcoMarket Platform',
      category: 'E-commerce',
      description: 'Sustainable marketplace connecting eco-conscious consumers with green businesses worldwide.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Shopify', 'GraphQL', 'Sustainability API', 'PWA'],
      featured: false,
      links: {
        live: '#',
        github: '#',
        case: '#'
      }
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-32 bg-neutral-950/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-8"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-neutral-400 max-w-3xl mx-auto"
          >
            A showcase of innovative solutions that push boundaries and create meaningful impact
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                  : 'bg-neutral-800/50 text-neutral-400 hover:text-white hover:bg-neutral-700/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl font-bold text-white mb-8 flex items-center"
          >
            <span className="w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mr-3"></span>
            Spotlight Projects
          </motion.h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="group project-card glass rounded-2xl overflow-hidden hover-glow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-3">
                      <motion.a
                        href={project.links.live}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary-500/80 transition-colors"
                      >
                        <ExternalLink size={18} className="text-white" />
                      </motion.a>
                      <motion.a
                        href={project.links.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary-500/80 transition-colors"
                      >
                        <Github size={18} className="text-white" />
                      </motion.a>
                      <motion.a
                        href={project.links.case}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary-500/80 transition-colors"
                      >
                        <Play size={18} className="text-white" />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-primary-400 font-medium">{project.category}</span>
                    <span className="px-2 py-1 bg-accent-500/20 text-accent-400 text-xs rounded-full">Featured</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-neutral-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-neutral-800/50 text-neutral-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Regular Projects Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-2xl font-bold text-white mb-8 flex items-center"
          >
            <span className="w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mr-3"></span>
            More Projects
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                className="group glass rounded-xl overflow-hidden hover-glow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <span className="text-sm text-primary-400 font-medium">{project.category}</span>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-neutral-800/50 text-neutral-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <motion.a
                      href={project.links.live}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-2 px-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-medium rounded-lg text-center hover:shadow-lg transition-shadow"
                    >
                      View Live
                    </motion.a>
                    <motion.a
                      href={project.links.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 border border-neutral-600 rounded-lg hover:border-primary-500 transition-colors"
                    >
                      <Github size={16} className="text-neutral-400" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center mt-16"
        >
          <p className="text-neutral-400 mb-6">Interested in seeing more of my work?</p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-semibold magnetic-btn hover-glow"
          >
            View Full Portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;