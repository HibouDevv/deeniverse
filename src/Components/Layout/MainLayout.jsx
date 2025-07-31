// Components/Layout/MainLayout.jsx
// main layout for all the differnet pages to show the navbar and the footer
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React from 'react';

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children} {/* This will be your page content */}
      <Footer />
    </>
  );
}