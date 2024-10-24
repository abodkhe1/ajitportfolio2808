import React from 'react';
import { jsPDF } from "jspdf";

function Resume() {
  const downloadPDF = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // Adding header
    doc.setFontSize(22);
    doc.text("Ajit Bodkhe", 10, 20);
    doc.setFontSize(12);
    doc.text("Email: ajitbodkhe2017@gmail.com | Contact No: +91 8605149238 / 9699919525", 10, 30);
    doc.text("LinkedIn: https://www.linkedin.com/in/ajit-bodkhe", 10, 40);
    doc.text("Location: Pune, India", 10, 50);

    // Profile Summary
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Profile Summary", 10, 65);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    const profileSummary = doc.splitTextToSize(
      "Full-Stack Developer with 2 years of experience. Proficient in Node.js, PHP, and MySQL.",
      190
    );
    doc.text(profileSummary, 10, 75);

    // Technical Skills
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Technical Skills", 10, 95);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    const skills = [
      "Web Technologies: HTML, CSS, JavaScript, JSON",
      "Frontend Frameworks: React.js, Angular, Bootstrap",
      "Backend Technologies: Node.js, Express, PHP",
      "Database Development: MySQL, MongoDB",
      "Development Tools: Visual Studio Code, Brackets Editor, MS SQL Server",
      "Platforms: Microsoft Windows",
      "Testing Tools: Postman",
      "Version Control: Git",
    ];
    let skillsY = 105;
    skills.forEach((skill) => {
      doc.text(skill, 10, skillsY);
      skillsY += 10; // Adding space between each skill
    });

    // Employment Details
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Employment Details", 10, skillsY + 15); // Position it below the last skill
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    // Monarch Tech Solutions & Systems Pvt. Ltd.
    doc.setFont("helvetica", "bold");
    const monarchStartY = skillsY + 25; // Start employment details below skills
    doc.text("Software Developer - Monarch Tech Solutions & Systems Pvt. Ltd.", 10, monarchStartY);
    doc.setFont("helvetica", "normal");
    doc.text("March 2024 – June 2024", 10, monarchStartY + 10);
    const monarchDetails = doc.splitTextToSize(
      "1) Led backend development using PHP for web applications.\n" +
      "2) Collaborated with front-end teams for seamless integration.\n" +
      "3) Optimized database operations and schema design with MySQL.\n" +
      "4) Used GitHub for version control and code management.",
      190
    );
    doc.text(monarchDetails, 10, monarchStartY + 20);

    // GRT Solutions
    const grtStartY = monarchStartY + 50;
    doc.setFont("helvetica", "bold");
    doc.text("Software Developer - GRT Solutions", 10, grtStartY);
    doc.setFont("helvetica", "normal");
    doc.text("June 2022 - January 2024", 10, grtStartY + 10);
    const grtDetails = doc.splitTextToSize(
      "1) Developed RESTful APIs with Node.js and PHP.\n" +
      "2) Integrated server-side logic with user-facing elements.\n" +
      "3) Designed and managed database schemas in MySQL.\n" +
      "4) Addressed and resolved technical issues to ensure uptime.",
      190
    );
    doc.text(grtDetails, 10, grtStartY + 20);

    // Adding a new page for the remaining sections
    doc.addPage();

    // Education
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Education", 10, 20);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Bachelor of Commerce (Vocational Computer) - Pune University, 2017 - 2020", 10, 30);
    doc.text("Master of Commerce - Pune University, 2020 – 2022", 10, 40);

    // Personal Details
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Personal Details", 10, 60);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Name: Bodkhe Ajit Madhukar", 10, 70);
    doc.text("Date of Birth: 28 August 1999", 10, 80);
    doc.text("Current Address: Narhe, Pune, INDIA (411041)", 10, 90);
    doc.text("Permanent Address: At-Post:-Talegaon Dighe, Sangamner,A.Nagar, MAHARASHTRA, INDIA (422611)", 10, 100);

    doc.save("Ajit_Bodkhe_Resume.pdf");
  };
  
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-end mb-12">
          <button
            onClick={downloadPDF}
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg border border-blue-700 hover:bg-blue-700 transition-colors duration-300"
          >
            Download Resume
          </button>
        </div>
        {/* The rest of your resume content for display */}
      </div>
      <div className='' style={{ border: '1px solid black', padding: '10px' }}>

          {/* Resume Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Ajit Bodkhe</h1>
            <p className="text-lg text-gray-700 mt-2">
              Email: <a href="mailto:ajitbodkhe2017@gmail.com" className="text-blue-600 hover:underline">ajitbodkhe2017@gmail.com</a> |
              Contact No: +91 8605149238 / 9699919525
            </p>
            <p className="text-lg text-gray-700 mt-2">
              LinkedIn: <a href="https://www.linkedin.com/in/ajit-bodkhe-full-stack-developer/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ajit Bodkhe</a>
            </p>
            <p className="text-lg text-gray-700 mt-2">Location: Pune, India</p>
          </header>
          <hr />
          {/* Profile Summary */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Profile Summary</h2>
            <p className="text-lg text-gray-700">
              Full-Stack Developer with 2 years of experience. Proficient in Node.js, PHP, and MySQL.
              Adept at converting complex concepts into functional, high-quality web applications that drive
              business performance and efficiency.
            </p>
          </section>
          <hr />

          {/* Technical Skills */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Technical Skills</h2>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li><strong>Web Technologies:</strong> HTML, CSS, JavaScript, JSON</li>
              <li><strong>Frontend Frameworks:</strong> React.js, Angular, Bootstrap</li>
              <li><strong>Backend Technologies:</strong> Node.js, Express, PHP</li>
              <li><strong>Database Development:</strong> MySQL, MongoDB</li>
              <li><strong>Development Tools:</strong> Visual Studio Code, Brackets Editor, MS SQL Server</li>
              <li><strong>Platforms:</strong> Microsoft Windows</li>
              <li><strong>Testing Tools:</strong> Postman</li>
              <li><strong>Version Control:</strong> Git</li>
            </ul>
          </section>
          <hr />

          {/* Employment Details */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Employment Details</h2>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Software Developer</h3>
              <p className="text-lg text-gray-700 mb-2">Monarch Tech Solutions & Systems Pvt. Ltd.</p>
              <p className="text-lg text-gray-700 mb-2">March 2024 – June 2024</p>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>Led backend development using PHP for web applications.</li>
                <li>Collaborated with front-end teams for seamless integration.</li>
                <li>Optimized database operations and schema design with MySQL.</li>
                <li>Used GitHub for version control and code management.</li>
              </ul>
              {/* <p className="text-lg text-gray-700"><strong>Project:</strong> Bhumapan</p>
            <p className="text-lg text-gray-700">
              Developed and maintained a web application for Bhumapan, facilitating access to property information 
              and services online. Utilized PHP and MySQL for backend development, with a user-friendly UI designed using 
              HTML, CSS, and Bootstrap.
            </p> */}
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Software Developer</h3>
              <p className="text-lg text-gray-700 mb-2">GRT Solutions</p>
              <p className="text-lg text-gray-700 mb-2">June 2022 - January 2024</p>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>Developed RESTful APIs with Node.js and PHP.</li>
                <li>Integrated server-side logic with user-facing elements.</li>
                <li>Designed and managed database schemas in MySQL.</li>
                <li>Addressed and resolved technical issues to ensure uptime.</li>
              </ul>
              {/* <p className="text-lg text-gray-700"><strong>Project:</strong> ERP (CRM)</p>
            <p className="text-lg text-gray-700">
              Contributed to an ERP system with CRM features, focusing on backend functionalities and database 
              schema design using Node.js, Express, and MongoDB. Worked closely with front-end teams to enhance user 
              experiences and streamline business operations.
            </p> */}
            </div>
          </section>
          <hr />

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Education</h2>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Bachelor of Commerce (Vocational Computer)</h3>
              <p className="text-lg text-gray-700">Pune University, 2017 - 2020</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Master of Commerce</h3>
              <p className="text-lg text-gray-700">Pune University, 2020 – 2022</p>
            </div>
          </section>
          <hr />

          {/* Personal Details */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Personal Details</h2>
            <p className="text-lg text-gray-700 mb-2"><strong>Name:</strong> Bodkhe Ajit Madhukar</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Date of Birth:</strong> 28 August 1999</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Current Address:</strong> Narhe, Pune, INDIA (411041)</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Permanent Address:</strong> Bodkhewadi, At- Wadzari Bk, Post: Talegaon Dighe, Sangamner, Dist: Ahmednagar, MAHARASHTRA, INDIA (422611)</p>
          </section>
        </div>
    </section>


  );
}

export default Resume;
