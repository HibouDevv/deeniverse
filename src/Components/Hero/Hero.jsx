import React from 'react';
import { motion } from 'framer-motion';
import FullWidth from '../Layout/FullWidth.jsx';
import Container from '../Layout/Container.jsx';
import heroImage from '../../assets/images/hero-grad.png';
import HeaderImage from '../../assets/images/head-image.png';
import Button from '../UI/Button.jsx';

const Hero = () => {
  return (
    <FullWidth>
      <section
        className="bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Container className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-[100px] min-h-[80vh] py-12 md:py-0">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left flex flex-col items-center md:items-start max-w-xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-white text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-6"
            >
              Unlock Your Potential with Expert-Led Learning
            </motion.h1>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
                <Button>Get Started</Button>
                <Button>Start Free Trial</Button>
      
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-[300px] sm:max-w-sm md:max-w-md lg:max-w-lg mb-8 md:mb-0"
          >
            <img src={HeaderImage} alt="Quran" className="w-full h-auto" />
          </motion.div>
        </Container>
      </section>
    </FullWidth>
  );
};

export default Hero;
