import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.png";
import Container from "../Layout/Container";

const Navbar = () => {
  // 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarDropdownOpen, setSidebarDropdownOpen] = useState(false);

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <>
      <Container>
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white flex justify-between items-center py-3"
        >
          <motion.img
            src={logo}
            alt="Quran Academy"
            className="max-w-[60px] md:max-w-[100px] h-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          />

          {/* Desktop Navigation */}
          <div className="flex justify-between items-center gap-[100px]">
            <nav className="hidden md:flex space-x-8 pl-[40px]">
              {["Home", "Teachers", "About", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="hover:text-[#F08622]"
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                >
                  {item}
                </motion.a>
              ))}

              {/* Courses Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="hover:text-[#F08622] flex items-center gap-1 focus:outline-none">
                  Courses
                  <span className="ml-1">▼</span>
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 mt-2 w-48 bg-white text-[#182F51] rounded shadow-lg z-10"
                    >
                      {["Quran Recitation", "Tajweed", "Islamic Studies", "Arabic Language"].map(
                        (course) => (
                          <li key={course}>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-[#F08622] hover:text-white transition"
                            >
                              {course}
                            </a>
                          </li>
                        )
                      )}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </nav>

<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="bg-[#F08622] hover:bg-[#d97417] transition-colors duration-300 text-white font-semibold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F08622] focus:ring-offset-2 w-full sm:w-auto text-center hidden md:block"
>
  Get Started
</motion.button>


            <button className="md:hidden text-2xl" onClick={() => setSidebarOpen(true)}>
              ☰
            </button>
          </div>
        </motion.header>
      </Container>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-64 bg-white text-[#182F51] z-50 md:hidden"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <img src={logo} alt="Quran Academy" className="max-w-[30px]" />
                <button
                  className="text-2xl"
                  onClick={() => setSidebarOpen(false)}
                  aria-label="Close sidebar"
                >
                  ×
                </button>
              </div>
              <nav className="flex flex-col p-4 space-y-2">
                {["Home", "Teachers", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:text-[#F08622] py-2"
                    onClick={() => setSidebarOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <div>
                  <button
                    className="flex items-center gap-1 w-full hover:text-[#F08622] py-2 focus:outline-none"
                    onClick={() => setSidebarDropdownOpen((prev) => !prev)}
                  >
                    Courses
                    <span className="ml-1">{sidebarDropdownOpen ? "▲" : "▼"}</span>
                  </button>
                  <AnimatePresence>
                    {sidebarDropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="pl-4"
                      >
                        {["Quran Recitation", "Tajweed", "Islamic Studies", "Arabic Language"].map(
                          (course) => (
                            <li key={course}>
                              <a
                                href="#"
                                className="block px-2 py-2 hover:bg-[#F08622] hover:text-white rounded transition"
                                onClick={() => setSidebarOpen(false)}
                              >
                                {course}
                              </a>
                            </li>
                          )
                        )}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#F08622] text-white font-semibold px-4 py-2 rounded-lg mt-4"
                >
                  Register
                </motion.button>
              </nav>
            </motion.div>

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
