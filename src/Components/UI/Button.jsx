import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, className, ...rest }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`bg-[#F08622] hover:bg-[#d97417] transition-colors duration-300 text-white font-semibold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F08622] focus:ring-offset-2 text-center ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default Button;
