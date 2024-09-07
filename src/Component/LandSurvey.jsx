import React from 'react';
import field from '../assets/field.jpeg'
import call from '../assets/call.png'
import quo from '../assets/quo.jpeg'
import con from '../assets/con.jpg'
function LandSurvey() {
  return (
    <section id="land-survey" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Land Survey Enquiry Module
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Callback Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={call} 
              alt="Callback" 
              className="w-full h-56 object-contain"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Callback</h3>
              {/* <p className="text-gray-600 mb-4">
                Request a callback for any land survey queries or additional information.
              </p>
              <a 
                href="#"
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                Request Callback
              </a> */}
            </div>
          </div>

          {/* Quotation Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={quo}
              alt="Quotation" 
              className="w-full h-56 object-contain"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quotation</h3>
              {/* <p className="text-gray-600 mb-4">
                Get a detailed quotation for land survey services based on your requirements.
              </p>
              <a 
                href="#"
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                Request Quotation
              </a> */}
            </div>
          </div>

          {/* Add Field Team Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={field}
              alt="Add Field Team" 
              className="w-full h-56 object-contain"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Add Field Team</h3>
              {/* <p className="text-gray-600 mb-4">
                Add members to your field team for effective land survey execution.
              </p>
              <a 
                href="#"
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                Add Team
              </a> */}
            </div>
          </div>

          {/* Convert to Actual Work Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={con}
              alt="Convert to Actual Work" 
              className="w-full h-56 object-contain"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Convert to Actual Work</h3>
              {/* <p className="text-gray-600 mb-4">
                Convert enquiry details into actionable work assignments for the field team.
              </p>
              <a 
                href="#"
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                Convert to Work
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandSurvey;
