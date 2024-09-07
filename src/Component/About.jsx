import React from 'react';
import profile from '../assets/profile.jpg'
import profile5 from '../assets/profile5.png'; 

function About() {
  return (
    <section id="about" className="py-20 ">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          <u>About Me</u>
        </h2>

        <div className="flex flex-col md:flex-row items-center">
          {/* Profile Image */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:mr-10">
            <img 
              src={profile5} 
              alt="Ajit Bodkhe"  style={{borderRadius:'50%'}}
              className="rounded-full shadow-lg mx-auto md:mx-15"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              Hi, I'm <span className="font-bold text-gray-800">Ajit Bodkhe</span>, a passionate Full Stack Developer with 1.6 years of experience in building and maintaining web applications using the MERN stack. My journey in web development started with a deep interest in creating dynamic and user-friendly applications.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My expertise lies in JavaScript and TypeScript, and I have a strong command over front-end technologies like React.js, as well as back-end development with Node.js, Express, and MongoDB. I enjoy solving complex problems and continuously improving my skills.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I'm a B.Com ( vocational computer) graduate, which gives me a unique perspective on business processes and user needs, allowing me to build more effective and user-centered applications.
            </p>

            {/* Skills Section */}
            {/* <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>
              <ul className="grid grid-cols-2 gap-4 text-lg text-gray-700">
                <li>JavaScript & TypeScript</li>
                <li>React.js</li>
                <li>Node.js & Express.js</li>
                <li>MongoDB & MySQLi</li>
                <li>HTML & CSS</li>
                <li>PHP</li>
                <li>Redux Toolkit</li>
                <li>Tailwind CSS</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
