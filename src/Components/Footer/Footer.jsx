import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#f08622] py-12 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col sm:flex-row justify-between gap-8"
          variants={fadeInUp}
          custom={0}
        >
          {/* Contact Section */}
          <motion.div
            className="flex-1 min-w-[200px]"
            variants={fadeInUp}
            custom={1}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              DEPARTMENT
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="hover:text-gray-100 transition">
                +92 321 5975150
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="mailto:deenivers@gmail.com"
                className="hover:text-gray-100 transition"
              >
                deenivers@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            className="flex-1 min-w-[200px]"
            variants={fadeInUp}
            custom={2}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-100 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100 transition">
                  Blogs
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex-1 min-w-[200px]"
            variants={fadeInUp}
            custom={3}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-100 transition">
                  Whatsapp Channel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100 transition">
                  Community links
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100 transition">
                  Registration form
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Address */}
        <motion.div
          className="mt-10 pt-6 border-t border -white/20 text-center text-sm"
          variants={fadeInUp}
          custom={4}
        >
          <p className="text-gray-900 italic">Build by Suffynux</p>

        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
