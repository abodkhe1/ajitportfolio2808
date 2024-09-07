import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className="p-4 fixed top-0 left-0 w-full z-50"
      style={{
        background: 'linear-gradient(90deg, rgb(33, 33, 31), rgb(61 66 34)'  // Dark yellow to dark shade
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <Link to={'home'} >Ajit Bodkhe</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to={'home'} className="text-gray-300 hover:text-white">Home</Link>
          <Link to={'about'}  className="text-gray-300 hover:text-white">About</Link>
          <Link to={'projects'}  className="text-gray-300 hover:text-white">Projects</Link>
          <Link to={'skills'}  className="text-gray-300 hover:text-white">Skills</Link>
          <Link to={'resume'}  className="text-gray-300 hover:text-white">Resume</Link>
          <Link to={'contact'}  className="text-gray-300 hover:text-white">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <Link to={'about'} className="block text-gray-300 hover:text-white py-2">About</Link>
          <Link to={'projects'} className="block text-gray-300 hover:text-white py-2">Projects</Link>
          <Link to={'skills'} className="block text-gray-300 hover:text-white py-2">Skills</Link>
          <Link to={'resume'} className="block text-gray-300 hover:text-white py-2">Resume</Link>
          <Link to={'contact'} className="block text-gray-300 hover:text-white py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
