import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Coffee, Users, Zap } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const stats = [
    { icon: Award, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '30+', label: 'Happy Clients' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' },
    { icon: Zap, value: '5+', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-32 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-8"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 text-lg text-neutral-300 leading-relaxed"
            >
              <p>
                I'm a passionate <span className="text-primary-400 font-semibold">Creative Director</span> and 
                <span className="text-accent-400 font-semibold"> Full-Stack Developer</span> with an obsession 
                for creating digital experiences that don't just look beautiful—they feel magical.
              </p>
              
              <p>
                My journey began with a simple belief: technology should enhance human connection, not complicate it. 
                This philosophy drives every pixel I push, every line of code I write, and every user journey I craft.
              </p>

              <p>
                When I'm not immersed in design systems or debugging complex applications, you'll find me 
                exploring the latest in AI, contributing to open-source projects, or mentoring the next 
                generation of creators.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-4"
            >
              <blockquote className="text-xl italic text-neutral-400 border-l-4 border-primary-500 pl-6">
                "Design is not just what it looks like and feels like. Design is how it works."
                <footer className="text-sm text-neutral-500 mt-2">— Steve Jobs</footer>
              </blockquote>
            </motion.div>
          </div>

          {/* Right Column - Stats & Visual */}
          <div className="space-y-8">
            {/* Profile Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl glass flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-500/20 rounded-full blur-xl"></div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map(({ icon: Icon, value, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="glass p-6 rounded-xl text-center hover-glow group"
                >
                  <Icon className="w-8 h-8 text-primary-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-1">{value}</div>
                  <div className="text-sm text-neutral-400">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;