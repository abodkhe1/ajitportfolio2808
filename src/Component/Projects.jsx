import React from 'react';
import { Link } from 'react-router-dom';
import Monarch from '../assets/Monarch-Survey.png'
import ERP from '../assets/ERP.png'


function Projects() {
  const projectList = [
    {
      title: 'ERP (CRM)',
      description: 'Contributed to the development of an Enterprise Resource Planning (ERP) system with Customer Relationship Management (CRM) features. Implemented key functionalities using Node.js and Express, designed dynamic database schemas with MongoDB, and collaborated closely with front-end developers to integrate user-friendly interfaces. Focused on improving business operations and customer management through seamless and efficient solutions.',
      image: ERP,
      technologies: ['Node.js', 'Express', 'mongoDB'],
      link: 'erpcom'
    },
    {
      title: 'Bhumapan',
      description: 'Developed and maintained a web application for Bhumapan, enabling clients to access property information and related services online. Utilized PHP for backend development, integrated with a MySQL database, and ensured a responsive user interface with HTML, CSS, and Bootstrap.',
      image: Monarch,
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'Bootstrap', 'Javascript'],
      link: 'landSurvey'
      // link: 'https://bhumapan.com/client/login/mobile_varify.php'
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          <u>My Projects</u>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-56 object-containe"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm font-medium text-gray-800 mb-4">Technologies Used:</p>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {tech}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={`/${project.link}`}
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                  View Project Module
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
