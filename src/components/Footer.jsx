import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold gradient-text"
            >
              Alex Johnson
            </motion.div>
            <p className="text-neutral-400 leading-relaxed">
              Creative Director & Full-Stack Developer crafting extraordinary digital experiences 
              that bridge imagination and reality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass rounded-full hover:bg-primary-500/20 transition-colors group"
                  aria-label={label}
                >
                  <Icon size={20} className="text-neutral-400 group-hover:text-primary-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <div className="space-y-3">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Services</h3>
            <div className="space-y-3">
              {[
                'Web Development',
                'UI/UX Design',
                'Brand Identity',
                'E-commerce Solutions',
                'Mobile Applications',
                'Consultation',
              ].map((service) => (
                <motion.div
                  key={service}
                  whileHover={{ x: 5 }}
                  className="text-neutral-400 hover:text-primary-400 transition-colors cursor-default"
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-neutral-400">
              <span>© {currentYear} Alex Johnson. Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>and lots of coffee</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm">
                Terms of Service
              </a>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 glass rounded-full hover:bg-primary-500/20 transition-colors group"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} className="text-neutral-400 group-hover:text-primary-400 transition-colors" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;