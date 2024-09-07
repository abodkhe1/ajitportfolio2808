import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col justify-center items-center">
        {/* Logo or Brand Name */}
        <div className="text-center text-white text-lg font-semibold mb-4">
          Ajit Bodkhe
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/abodkhe1/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/ajit-bodkhe-full-stack-developer/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
            <i className="fab fa-twitter text-2xl"></i>
          </a> */}
          <a href="https://wa.me/8605149238" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
            <i className="fab fa-whatsapp text-2xl"></i>
          </a>
          <a href="https://instagram.com/abodkhe_28" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500 mt-8">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </div>
      </div>
    </footer> 
  );
}

export default Footer;
