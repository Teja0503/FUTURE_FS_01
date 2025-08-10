import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
        { name: 'Tailwind CSS', level: 95, color: 'from-teal-500 to-green-500' },
        { name: 'Framer Motion', level: 85, color: 'from-purple-500 to-pink-500' },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 88, color: 'from-green-600 to-green-400' },
        { name: 'Python', level: 82, color: 'from-yellow-500 to-orange-500' },
        { name: 'PostgreSQL', level: 85, color: 'from-blue-700 to-blue-500' },
        { name: 'GraphQL', level: 80, color: 'from-pink-500 to-rose-500' },
      ],
    },
    {
      title: 'Design & Creative',
      skills: [
        { name: 'UI/UX Design', level: 92, color: 'from-purple-600 to-purple-400' },
        { name: 'Figma', level: 90, color: 'from-red-500 to-orange-500' },
        { name: 'Adobe Creative Suite', level: 85, color: 'from-red-600 to-pink-500' },
        { name: 'Brand Identity', level: 88, color: 'from-indigo-500 to-purple-500' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 90, color: 'from-gray-700 to-gray-500' },
        { name: 'Docker', level: 75, color: 'from-blue-500 to-blue-600' },
        { name: 'AWS/Vercel', level: 80, color: 'from-orange-500 to-yellow-500' },
        { name: 'Webpack/Vite', level: 85, color: 'from-green-500 to-teal-500' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 bg-neutral-900/50">
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
            My <span className="gradient-text">Skills</span>
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
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + categoryIndex * 0.1 }}
              className="glass p-8 rounded-2xl hover-glow"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mr-3"></span>
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-300 font-medium">{skill.name}</span>
                      <span className="text-neutral-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.1, ease: 'easeOut' }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h4 className="text-xl font-semibold text-white mb-6">Also experienced with</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Redux', 'Vue.js', 'Angular', 'MongoDB', 'Firebase', 'Supabase',
              'Three.js', 'GSAP', 'Prisma', 'tRPC', 'Stripe', 'WebGL',
              'Shopify', 'WordPress', 'Contentful', 'Sanity'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
                className="px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-full text-neutral-300 text-sm hover:border-primary-500 hover:text-primary-400 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;