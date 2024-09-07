import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './Footer';
import profile5 from '../assets/profile5.png'; 
import bg from '../assets/bg.jpg'; 
import './Home.css'; 

function Home() {
  return (
    <>
      {/* Home Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden"
      >
        {/* Animated Background */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `url(${bg})` }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Content Container */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-6 items-center justify-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="col-span-1 md:col-span-3 flex justify-center mb-8 md:mb-0">
          <img
  src={profile5} style={{borderRadius:'50%'}}
  alt="Ajit Bodkhe Profile"
  className="w-9/12 h-400 md:w-9/12 md:h-400 rounded-full border-4 border-white shadow-lg transform scale-100 hover:scale-105 transition-transform duration-300"
/>

          </div>

          {/* Text Content */}
          <div className="col-span-1 md:col-span-3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Ajit Bodkhe</h1>
            <p className="text-lg md:text-xl mb-2 animate-fade-in delay-1s">Full Stack Developer</p>
            <div className="text-lg md:text-xl mb-4 animate-fade-in delay-2s">
              <p className="mb-2">Contact: <a href="tel:+918605149238" className="hover:underline">8605149238</a></p>
              <p className="mb-2">Email: <a href="mailto:ajitbodkhe2017@gmail.com" className="hover:underline">ajitbodkhe2017@gmail.com</a></p>
              <p className="mb-2">LinkedIn: <a href="https://www.linkedin.com/in/ajit-bodkhe-full-stack-developer" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Ajit Bodkhe</a></p>
              <p>Location: Pune, India</p>
            </div>
            <Link
              to={'/resume'}
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-8 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in delay-3s"
            >
              View Resume
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 w-full flex justify-center animate-bounce animate-delay-4s">
          <a href="#about" className="text-white text-lg font-semibold tracking-wider">↓ Scroll Down</a>
        </div>
      </section>

      {/* Additional Sections */}
      <About />
      <Skills />
      <Projects />
      <Contact />
   
    </>
  );
}

export default Home;
