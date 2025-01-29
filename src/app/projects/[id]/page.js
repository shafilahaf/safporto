// app/projects/[id]/page.js
'use client'
import React from 'react';
import { useParams } from 'next/navigation';

const ProjectPage = () => {
  const { id } = useParams(); // Extract the dynamic 'id' from the URL

  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-semibold mb-8">Project: {id}</h2>
        <p className="text-lg text-gray-600 mb-8">
          This project page is currently under development. Check back soon for more details.
        </p>
        {/* You can add any other placeholder information or message */}
        <div className="bg-yellow-100 p-4 rounded-md text-center">
          <p className="text-xl font-semibold text-yellow-700">Work in Progress!</p>
          <p className="text-gray-600">This project is not yet available. Stay tuned for updates!</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
