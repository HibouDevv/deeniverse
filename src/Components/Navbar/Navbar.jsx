import React, { useState } from "react";
import logo from "../../assets/images/logo.svg"; // Adjust the path as necessary
import Container from "../Layout/Container";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarDropdownOpen, setSidebarDropdownOpen] = useState(false);

  return (
    <>
    {/* Header start */}
   <Container>

   <header className="text-white flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="Quran Academy" className="w-[200px] h-[125px]" />
        {/* Navbar start */}
        <div className="flex justify-between items-center gap-[100px]">
          <div className="flex items-center">
           
          </div>
          <nav className="hidden md:flex space-x-8 pl-[40px]">
            <a href="#" className="hover:text-[#F08622]">
              Home
            </a>
            {/* Drop down for courses */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="hover:text-[#F08622] flex items-center gap-1 focus:outline-none"
                type="button"
              >
                Courses
                <span className="ml-1">▼</span>
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-[#182F51] rounded shadow-lg z-10">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-[#F08622] hover:text-white transition"
                    >
                      Quran Recitation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-[#F08622] hover:text-white transition"
                    >
                      Tajweed
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-[#F08622] hover:text-white transition"
                    >
                      Islamic Studies
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-[#F08622] hover:text-white transition"
                    >
                      Arabic Language
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <a href="#" className="hover:text-[#F08622]">
              Teachers
            </a>
            <a href="#" className="hover:text-[#F08622]">
              About
            </a>
            <a href="#" className="hover:text-[#F08622]">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-[#F08622] text-white font-medium px-4 py-2 rounded-lg cursor-pointer">
              Get started
            </button>
            <button
              className="md:hidden text-2xl"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

   </Container>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-[#182F51] z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <img src={logo} alt="Quran Academy" className="w-32 h-20" />
          <button
            className="text-2xl"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            ×
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <a
            href="#"
            className="hover:text-[#F08622] py-2"
            onClick={() => setSidebarOpen(false)}
          >
            Home
          </a>
          <div>
            <button
              className="flex items-center gap-1 w-full hover:text-[#F08622] py-2 focus:outline-none"
              onClick={() => setSidebarDropdownOpen((prev) => !prev)}
            >
              Courses
              <span className="ml-1">{sidebarDropdownOpen ? "▲" : "▼"}</span>
            </button>
            {sidebarDropdownOpen && (
              <ul className="pl-4">
                <li>
                  <a
                    href="#"
                    className="block px-2 py-2 hover:bg-[#F08622] hover:text-white rounded transition"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Quran Recitation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-2 py-2 hover:bg-[#F08622] hover:text-white rounded transition"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Tajweed
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-2 py-2 hover:bg-[#F08622] hover:text-white rounded transition"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Islamic Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-2 py-2 hover:bg-[#F08622] hover:text-white rounded transition"
                    onClick={() => setSidebarOpen(false)}
                  >
                    Arabic Language
                  </a>
                </li>
              </ul>
            )}
          </div>
          <a
            href="#"
            className="hover:text-[#F08622] py-2"
            onClick={() => setSidebarOpen(false)}
          >
            Teachers
          </a>
          <a
            href="#"
            className="hover:text-[#F08622] py-2"
            onClick={() => setSidebarOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-[#F08622] py-2"
            onClick={() => setSidebarOpen(false)}
          >
            Contact
          </a>
          <button className="bg-[#F08622] text-white font-semibold px-4 py-2 rounded-lg mt-4">
            Register
          </button>
        </nav>
      </div>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;