import React from "react";

const Navbar = () => {
  return (
    <>
      <header class="bg-green-800 text-white py-4 px-6 shadow-md">
        <div class="container mx-auto flex justify-between items-center">
          <div class="flex items-center">
            {/* <img src="" alt="Quran Academy" class="h-12 mr-3"> */}
            <h1 class="text-2xl font-bold">Quran Academy</h1>
          </div>
          <nav class="hidden md:flex space-x-8">
            <a href="#" class="hover:text-yellow-300">
              Home
            </a>
            <a href="#" class="hover:text-yellow-300">
              Courses
            </a>
            <a href="#" class="hover:text-yellow-300">
              Teachers
            </a>
            <a href="#" class="hover:text-yellow-300">
              About
            </a>
            <a href="#" class="hover:text-yellow-300">
              Contact
            </a>
          </nav>
          <div class="flex items-center space-x-4">
            <button class="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold px-4 py-2 rounded-lg">
              Register
            </button>
            <button class="md:hidden text-2xl">☰</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
