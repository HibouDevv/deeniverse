import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/logo.png';
import Container from '../Layout/Container';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarDropdownOpen, setSidebarDropdownOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

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

  const navItems = [
    { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Contact Us', path: '/contact-us' },
  { name: 'Quizzes', path: '/quizzes' },
  { name: 'Prayer Times', path: '/prayer-times' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Basic Qaida with Tajweed',
      path: '/courses/1',
    },
    {
      id: 2,
      title: 'Nazra Quran with Tajweed',
      path: '/courses/2',
    },
    {
      id: 3,
      title: 'Masnoon Duas & Namaz',
      path: '/courses/3',
    },
    {
      id: 4,
      title: 'Tajweed-ul-Quran',
      path: '/courses/4',
    },
    {
      id: 5,
      title: 'Tarjuma Tul Quran',
      path: '/courses/5',
    },
    {
      id: 6,
      title: 'Tafsir-ul-Quran',
      path: '/courses/6',
    },
    {
      id: 7,
      title: 'Fahm-Ul-Quran',
      path: '/courses/7',
    },
  ];

  return (
    <>
      {/* Announcement Banner */}
  <AnimatePresence>
  {bannerVisible && (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 flex flex-row items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-1 sm:gap-2 flex-1 min-w-0">
          <span className="text-xs sm:text-sm lg:text-base font-semibold truncate">
            📖 Join Our Free Tafseer-ul-Quran Course Today!
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <a
            href="https://api.whatsapp.com/send/?phone=923265566969&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-amber-600 font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
          >
            Join Now
          </a>
          <button
            onClick={() => setBannerVisible(false)}
            className="text-white hover:text-gray-200 text-lg sm:text-xl focus:outline-none flex-shrink-0 p-1"
            aria-label="Close banner"
          >
            ×
          </button>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

      <Container>
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-white flex justify-between items-center py-4 ${bannerVisible ? 'mt-16 sm:mt-14' : ''}`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/">
              <img
                src={logo}
                alt="Deeniverse Academy"
                className="max-w-[60px] md:max-w-[100px] h-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="flex justify-between items-center gap-8 md:gap-16">
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-lg font-medium transition-colors duration-200 ${
                        isActive ? 'text-amber-500' : 'text-white hover:text-amber-500'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}

              {/* Courses Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="text-lg font-medium text-white hover:text-amber-500 flex items-center gap-1 focus:outline-none transition-colors duration-200">
                  <Link to={"/courses"}>Our Courses</Link>
                  <span className="ml-1">{dropdownOpen ? '▲' : '▼'}</span>
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 mt-3 w-64 bg-gray-800/90 backdrop-blur-lg text-white rounded-lg shadow-xl z-10 border border-gray-700"
                    >
                      {courses.map((course) => (
                        <li key={course.id}>
                          <Link
                            to={course.path}
                            className="block px-4 py-3 text-sm hover:bg-amber-500 hover:text-gray-900 transition-colors duration-200 rounded-lg"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {course.title}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-amber-500 hover:bg-amber-600 text-white-900 font-semibold text-sm md:text-base px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 hidden md:block"
            >
              <Link to="https://api.whatsapp.com/send/?phone=923265566969&text&type=phone_number&app_absent=0" target='_blank'>Get Started</Link>
            </motion.button>

            <button
              className="md:hidden text-2xl text-white"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
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
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-50 md:hidden"
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <Link to="/" onClick={() => setSidebarOpen(false)}>
                  <img src={logo} alt="Deeniverse Academy" className="max-w-[40px]" />
                </Link>
                <button
                  className="text-2xl text-white"
                  onClick={() => setSidebarOpen(false)}
                  aria-label="Close sidebar"
                >
                  ×
                </button>
              </div>
              <nav className="flex flex-col p-4 space-y-3">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `text-lg font-medium py-2 transition-colors duration-200 ${
                        isActive ? 'text-amber-500' : 'text-white hover:text-amber-500'
                      }`
                    }
                    onClick={() => setSidebarOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
                <div>
                  <button
                    className="flex items-center gap-1 w-full text-lg font-medium text-white hover:text-amber-500 py-2 focus:outline-none transition-colors duration-200"
                    onClick={() => setSidebarDropdownOpen((prev) => !prev)}
                  >
                    Our Courses
                    <span className="ml-1">{sidebarDropdownOpen ? '▲' : '▼'}</span>
                  </button>
                  <AnimatePresence>
                    {sidebarDropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 space-y-2"
                      >
                        {courses.map((course) => (
                          <li key={course.id}>
                            <Link
                              to={course.path}
                              className="block px-3 py-2 text-sm hover:bg-amber-500 hover:text-gray-900 rounded-lg transition-colors duration-200"
                              onClick={() => {
                                setSidebarOpen(false);
                                setSidebarDropdownOpen(false);
                              }}
                            >
                              {course.title}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-500 text-gray-900 font-semibold px-4 py-2 rounded-lg mt-4"
                >
                  <Link to="/register" onClick={() => setSidebarOpen(false)}>
                    Register
                  </Link>
                </motion.button>
              </nav>
            </motion.div>

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
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