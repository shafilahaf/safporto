import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Odoo Developer at Trusta Technologies",
      description: "Lead Odoo development at Trusta Technologies, focusing on custom module creation, payroll management, and system optimization. I manage backend operations, API integrations, and enhance Odoo POS functionality. Additionally, I oversee the helpdesk system and support customer queries.",
      date: "March 2022 - Present",
    },
    {
      title: "Business Central Dev at Trusta Technologies",
      description: "Develop custom modules within Business Central that are not present in the standard Business Central package. Examples included modules for Purchase Requests and custom extensions.",
      date: "March 2022 - Present",
    },
    {
      title: ".NET Developer",
      description: "Making payroll system website using ASP .NET Core MVC and API.",
      date: "March 2022 - Present",
    },
    {
      title: "Freelance Web Developer | PT. Global Data Inspirasi",
      description: "Handle small tasks in .NET Core and Laravel-Reacts projects.",
      date: "February 2023 - May 2023",
    },
    {
      title: "Assistant Lecturer | AMIKOM University",
      description: "Teach Advanced and Basic web programming course and Statistics Course",
      date: "September 2020 - January 2022",
    }
  ];

  return (
    <div id="experience" className="w-full py-16 bg-white pt-32">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-semibold mb-12 text-gray-800">My Experience</h2>
        {/* Timeline Layout */}
        <div className="relative">
          {/* Line for Timeline */}
          <div className="absolute left-1/2 top-0 w-px bg-gray-300 h-full transform -translate-x-1/2"></div>
          {/* Timeline Items */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row justify-between items-center group p-6 rounded-lg transition-all duration-300 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`absolute left-1/2 transform -translate-x-1/2 top-0 w-4 h-4 bg-blue-500 rounded-full shadow-md transition-all duration-300 ${index % 2 === 0 ? "top-5" : "top-12"}`}></div>
                <div
                  className={`flex items-start w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                >
                  <div
                    className={`flex flex-col ${index % 2 === 0 ? "items-end text-right" : "items-start text-left"}`}
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{experience.title}</h3>
                    <p className="text-sm text-gray-600 text-justify">{experience.description}</p>
                    <span className="text-xs text-gray-500 mt-2">{experience.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
