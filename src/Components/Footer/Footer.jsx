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
            <li><Link to="/courses/1" className="hover:text-orange-400 transition">Basic Qaida with Tajweed</Link></li>
            <li><Link to="/courses/2" className="hover:text-orange-400 transition">Nazra Quran with Tajweed</Link></li>
            <li><Link to="/courses/3" className="hover:text-orange-400 transition">Masnoon Duas & Namaz</Link></li>
            <li><Link to="/courses/4" className="hover:text-orange-400 transition">Tajweed-ul-Quran</Link></li>
            <li><Link to="/courses/5" className="hover:text-orange-400 transition">Tarjuma Tul Quran</Link></li>
            <li><Link to="/courses/6" className="hover:text-orange-400 transition">Tafsir-ul-Quran</Link></li>
            <li><Link to="/courses/7" className="hover:text-orange-400 transition">Fahm-ul-Quran</Link></li>
          </ul>
        </div>

        {/* Right Section - Socials */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-orange-400">Connect With Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 hover:text-orange-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-orange-400 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 hover:text-orange-400 transition" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-5 h-5 hover:text-orange-400 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-orange-400 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="relative text-center py-4 text-sm text-gray-400 border-t border-slate-700">
        © {new Date().getFullYear()} Deeniverse Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
