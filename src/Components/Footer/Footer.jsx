import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className="relative text-white z-10"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/318451/pexels-photo-318451.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-blue-800 to-slate-800 opacity-90"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 border-t border-slate-700">
        {/* Left Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-orange-400">Deeniverse Academy</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            A premier Islamic learning platform dedicated to Quran, Tajweed, and Islamic sciences — delivered with excellence, spirituality, and global accessibility.
          </p>
        </div>

        {/* Center Section - Courses */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-orange-400">Our Courses</h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              <Link 
                to="/courses/1" 
                className="block py-1 px-2 -mx-2 rounded hover:text-orange-400 hover:bg-white/5 transition-all duration-200 touch-manipulation"
              >
                Basic Qaida with Tajweed
              </Link>
            </li>
            <li>
              <Link 
                to="/courses/2" 
                className="block py-1 px-2 -mx-2 rounded hover:text-orange-400 hover:bg-white/5 transition-all duration-200 touch-manipulation"
              >
                Nazra Quran with Tajweed
              </Link>
            </li>
            <li>
              <Link 
                to="/courses/3" 
                className="block py-1 px-2 -mx-2 rounded hover:text-orange-400 hover:bg-white/5 transition-all duration-200 touch-manipulation"
              >
                Masnoon Duas & Namaz
              </Link>
            </li>
            <li>
              <Link 
                to="/courses/4" 
                className="block py-1 px-2 -mx-2 rounded hover:text-orange-400 hover:bg-white/5 transition-all duration-200 touch-manipulation"
              >
                Tajweed-ul-Quran
              </Link>
            </li>
            <li>
              <Link 
                to="/courses/5" 
                className="block py-1 px-2 -mx-2 rounded hover:text-orange-400 hover:bg-white/5 transition-all duration-200 touch-manipulation"
              >
                Tarjuma Tul Quran
              </Link>
            </li>
            <li>
              <Link 
                to="/courses/6" 
                className="block py-1 px-2 -mx-2 rounded hover:text-orange-400 hover:bg-white/5 transition-all duration-200 touch-manipulation"
              >
                Tafsir-ul-Quran
              </Link>
            </li>
            <li>
              <Link 
                to="/courses/7" 
                className="block py-1 px-2 -mx-2 rounded hover:text-orange-400 hover:bg-white/5 transition-all duration-200 touch-manipulation"
              >
                Fahm-ul-Quran
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Socials */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-orange-400">Connect With Us</h3>
          <div className="flex gap-4 mt-2 flex-wrap">
            <a 
              href="https://www.linkedin.com/company/deeni-verse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 -m-2 rounded hover:bg-white/10 transition-all duration-200 touch-manipulation"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 hover:text-orange-400 transition" />
            </a>
            <a 
              href="https://www.instagram.com/deeniverse.official/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 -m-2 rounded hover:bg-white/10 transition-all duration-200 touch-manipulation"
              title="Instagram"
            >
              <Instagram className="w-5 h-5 hover:text-orange-400 transition" />
            </a>
            <a 
              href="https://www.youtube.com/@deenverse.official" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 -m-2 rounded hover:bg-white/10 transition-all duration-200 touch-manipulation"
              title="YouTube"
            >
              <Youtube className="w-5 h-5 hover:text-orange-400 transition" />
            </a>
            <a 
              href="https://www.tiktok.com/@deeniverse.official" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 -m-2 rounded hover:bg-white/10 transition-all duration-200 touch-manipulation"
              title="TikTok"
            >
              <svg className="w-5 h-5 hover:text-orange-400 transition" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="relative text-center py-4 text-sm text-gray-400 border-t border-slate-700 space-y-1">
        <div>© {new Date().getFullYear()} Deeniverse Academy. All rights reserved.</div>
        <div>
          Developed by{' '}
          <a 
            href="https://sufiyan-nine.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 transition-colors duration-200 font-medium"
          >
            Suffynux
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;