import React from 'react';

function Skills() {
  const skillsList = [
    { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/919/919828.png' },
    { name: 'TypeScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png' },
    { name: 'React.js', icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
    { name: 'Angular.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png' },
    { name: 'Node.js', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png' },
    { name: 'Express.js', icon: 'https://files.oaiusercontent.com/file-eQxfrZI8suNdr5FPVDcRfTKG?se=2123-10-25T08%3A27%3A25Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D17c86623-dfcc-4c0c-84b9-dddbca7b6466.png&sig=jEpIYkG0JA/j9d8LUmrJu%2BDUPxvEVaAMnHvb8AIidiQ%3D' },
    { name: 'MongoDB', icon: 'https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png' },
    { name: 'PHP', icon: 'https://cdn-icons-png.flaticon.com/512/919/919830.png' },
    { name: 'MySQL', icon: 'https://cdn-icons-png.flaticon.com/512/919/919836.png' },
    { name: 'HTML5', icon: 'https://cdn-icons-png.flaticon.com/512/919/919827.png' },
    { name: 'CSS3', icon: 'https://cdn-icons-png.flaticon.com/512/919/919826.png' },
    { name: 'Redux', icon: 'https://cdn-icons-png.flaticon.com/512/919/919826.png' },
    { name: 'Tailwind CSS', icon: 'https://cdn-icons-png.flaticon.com/512/919/919826.png' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          <u>My Skills</u>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skillsList.map((skill, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
