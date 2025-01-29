import React from "react";
import Image from 'next/image';
import { assets } from "../../../assets/assets";
import Link from 'next/link';

const Work = () => {
    const projects = [
        {
            title: "Payroll Management",
            description: "Odoo, Python, PostgreSQL, JavaScript",
            image: assets.wip, // Replace with actual image
            id: "payroll-management",
            // link: "https://github.com/yourusername/project2",
        },
        {
            title: "Admin Dashboard",
            description: "Odoo, Python, PostgreSQL, JavaScript",
            image: assets.wip, // Replace with actual image
            id: "admin-dashboard",
            // link: "https://github.com/yourusername/project2", // Replace with actual link
        },
        {
            title: "Inventory Management",
            description: "Odoo, Python, PostgreSQL, JavaScript",
            image: assets.wip, // Replace with actual image
            id: "inventory-management",
            // link: "https://github.com/yourusername/project2", // Replace with actual link
        },
        {
            title: "Handheld Inventory",
            description: "Odoo, Python, PostgreSQL, JavaScript",
            image: assets.wip, // Replace with actual image
            id: "handheld-inventory",
            // link: "https://github.com/yourusername/project2", // Replace with actual link
        },
        {
            title: "Laundry Management",
            description: "Odoo, Python, PostgreSQL, JavaScript",
            image: assets.wip, // Replace with actual image
            id: "laundry-management",
            // link: "https://github.com/yourusername/project2", // Replace with actual link
        }
    ];

    return (
        <div id="work" className="w-full py-16 bg-white pt-32">
            <div className="max-w-6xl mx-auto px-8 text-center">
                <h2 className="text-4xl font-semibold mb-12">My Work</h2>
                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="border-2 border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                            <div className="mb-4">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={400}
                                    height={250}
                                    className="object-cover rounded-md"
                                />
                            </div>
                            <div className="flex flex-col h-full">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                                <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                                <a
                                    href={`/projects/${project.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700 font-medium"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
