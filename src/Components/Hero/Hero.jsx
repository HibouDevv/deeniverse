import React from 'react';
import { motion } from 'framer-motion';
import FullWidth from '../Layout/FullWidth.jsx';
import Container from '../Layout/Container.jsx';
import heroImage from '../../assets/images/hero-grad.png';
import HeaderImage from '../../assets/images/head-image.png';

const Hero = () => {
  return (
    <FullWidth>
      <section
        className="bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Container className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[300px] min-h-[80vh]">

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left flex flex-col items-start mb-8 md:mb-0 max-w-lg"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
            >
              Unlock Your Potential with Expert-Led Learning
            </motion.h1>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-[#F08622] hover:bg-[#d97417] transition-colors duration-300 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-xl shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F08622] focus:ring-offset-2"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-[#F08622] hover:bg-[#d97417] transition-colors duration-300 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-xl shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F08622] focus:ring-offset-2"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-auto max-w-xs sm:max-w-sm md:max-w-none"
          >
            <img src={HeaderImage} alt="Quran" className="w-full h-auto" />
          </motion.div>

        </Container>
      </section>
    </FullWidth>
  );
};

export default Hero;
