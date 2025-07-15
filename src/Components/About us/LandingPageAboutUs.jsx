import React from 'react';
import { motion } from 'framer-motion';
import Container from '../Layout/Container';
import AboutImage from '../../assets/images/aboutusImage.svg';
import Button from '../UI/Button';

const LandingPageAboutUs = () => {
  return (
    <Container>
      <section className="flex flex-col-reverse md:flex-row items-center md:gap-[300px] justify-center py-12">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left max-w-xl"
        >
          <h1 className="text-3xl font-bold mb-4 text-white">About Us</h1>
          <p className="text-white">
            We provide Quranic education through online courses, making it accessible for national and international students. Join us to deepen your understanding of the Quran from the comfort of your home.
          </p>
          <Button className={"mt-6"}>
            Learn More
          </Button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-sm"
        >
          <img src={AboutImage} alt="About Us" className="w-full h-auto" />
        </motion.div>
      </section>


    </Container>
  );
};

export default LandingPageAboutUs;
