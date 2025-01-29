'use client'
import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="w-full bg-gray-800 text-white py-16 mt-16">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-semibold mb-8">Contact Me</h2>
        <p className="text-lg mb-8">Feel free to get in touch! You can reach me through the following:</p>

        <div className="space-y-4">
          {/* GitHub Link */}
          <div>
            <a
              href="https://github.com/shafilahaf" // Replace with your GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 text-xl"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>

          {/* Email Link */}
          <div>
            <a
              href="mailto:shafilah.af@gmail.com" // Your email
              className="text-blue-400 hover:text-blue-500 text-xl"
            >
              <i className="fas fa-envelope"></i> Email Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
