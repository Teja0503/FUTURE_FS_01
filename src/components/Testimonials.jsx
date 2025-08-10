import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'CEO, TechFlow Solutions',
      company: 'TechFlow Solutions',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Alex transformed our entire digital presence. The attention to detail and innovative approach exceeded all expectations. Our conversion rates increased by 340% within the first month.',
      rating: 5,
      project: 'E-commerce Platform Redesign'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'CTO, InnovateLab',
      company: 'InnovateLab',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Working with Alex was a game-changer. The technical expertise combined with creative vision delivered results beyond our wildest dreams. Truly a master of the craft.',
      rating: 5,
      project: 'AI-Powered Analytics Dashboard'
    },
    {
      id: 3,
      name: 'Emily Watson',
      role: 'Founder, GreenSpace',
      company: 'GreenSpace',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Alex doesn\'t just build websites, they craft experiences. The sustainable marketplace platform has revolutionized how we connect with our eco-conscious community.',
      rating: 5,
      project: 'Sustainable Marketplace Platform'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Product Manager, FinanceFlow',
      company: 'FinanceFlow',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The cryptocurrency dashboard Alex created is simply phenomenal. Complex data visualized beautifully, with performance that handles millions of transactions seamlessly.',
      rating: 5,
      project: 'Cryptocurrency Trading Platform'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Creative Director, BrandForge',
      company: 'BrandForge',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Alex\'s design system work is unparalleled. The component library has streamlined our entire design process and elevated the quality of all our digital products.',
      rating: 5,
      project: 'Enterprise Design System'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 bg-neutral-900/30">
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
            Client <span className="gradient-text">Testimonials</span>
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
            What industry leaders say about working with me
          </motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Quote Icon */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-primary-500/10" />
            
            {/* Rating Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Content */}
            <motion.blockquote
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-neutral-300 text-center leading-relaxed mb-8 italic"
            >
              "{testimonials[currentIndex].content}"
            </motion.blockquote>

            {/* Client Info */}
            <motion.div
              key={`client-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center space-x-4"
            >
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary-500/30"
              />
              <div className="text-center">
                <h4 className="text-white font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-neutral-400 text-sm">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-primary-400 text-sm font-medium">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>

            {/* Project Tag */}
            <motion.div
              key={`project-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-6"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full text-primary-300 text-sm">
                {testimonials[currentIndex].project}
              </span>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 glass rounded-full hover:bg-primary-500/20 transition-colors group"
          >
            <ChevronLeft className="w-6 h-6 text-neutral-400 group-hover:text-primary-400" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 glass rounded-full hover:bg-primary-500/20 transition-colors group"
          >
            <ChevronRight className="w-6 h-6 text-neutral-400 group-hover:text-primary-400" />
          </button>
        </motion.div>

        {/* Testimonial Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-3 mb-16"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 scale-125'
                  : 'bg-neutral-600 hover:bg-neutral-500'
              }`}
            />
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <h3 className="text-neutral-500 text-sm uppercase tracking-wider mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {['TechFlow', 'InnovateLab', 'GreenSpace', 'FinanceFlow', 'BrandForge'].map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="text-2xl font-bold text-neutral-600 hover:text-neutral-400 transition-colors cursor-default"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;