'use client';
import Image from 'next/image';
import React from 'react';
import { assets } from '../../../assets/assets';
import '../components_2/components_2.css';
import Link from 'next/link';

const Content2 = () => {
  return (
    <div className="max-w-[8.27in] mx-auto p-6 text-white mt-12">
      <div className="flex flex-wrap items-center">
        {/* Left Photo */}
        <div className="w-full sm:w-1/3 pr-5 pb-4 flex justify-center sm:justify-start">
          <Image 
            src={assets.filol} 
            alt="Profile"
            className="w-[150px] h-[150px] rounded-full object-cover"
          />
        </div>

        {/* Right Description */}
        <div className="w-full sm:w-2/3 text-center sm:text-left">
          <h1 className="text-3xl font-bold">SHAFILAH AF</h1>
          <p className="text-lg mt-2 font-mono">SOFTWARE ENGINEER, BACK END & APP DEVELOPER</p>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="text-base leading-relaxed mt-2 font-mono">
        Hi, I'm Fila, a Software Engineer skilled in Python, JavaScript, and C#. <br />
        I specialize in building efficient back-end systems and apps, with experience in developing and customizing Odoo solutions to streamline business processes.
        </p>
      </div>

      {/* Work Experience Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Work Experience</h2>

        {/* Experience Item */}
        <div className="mt-4 flex items-center">
          <p className="text-sm font-mono w-1/4">2022 - Present</p>
          <div className="w-3/4 pl-4"> 
            {/* Odoo */}
            <h3 className="text-yellow-400 font-bold mt-1">Odoo Developer</h3>
            <p className="text-yellow-400 text-xs">at Trusta Technologies</p>
            <p className="text-sm leading-relaxed font-mono mt-2">
                Lead Odoo development at Trusta Technologies, focusing on custom module creation, payroll management, and system optimization. I manage backend operations, API integrations, and enhance Odoo POS functionality. Additionally, I oversee the helpdesk system and support customer queries.
            </p>
            <p className="text-sm font-mono text-gray-400">Python | PostgresQL | XML | JavaScript</p>
            <br />
            {/* BC */}
            <h3 className="text-yellow-400 font-bold mt-1">Business Central Developer</h3>
            <p className="text-yellow-400 text-xs">at Trusta Technologies</p>
            <p className="text-sm leading-relaxed font-mono mt-2">
                Develop custom modules within Business Central that are not present in the standard Business Central package. Examples included modules for Purchase Requests and custom extensions.
            </p>
            <p className="text-sm font-mono text-gray-400">C/AL | Microsoft SQL Server | Microsoft Dynamics 365</p>
            <br />
            {/* NET */}
            <h3 className="text-yellow-400 font-bold mt-1">.NET CORE Developer</h3>
            <p className="text-yellow-400 text-xs">at Trusta Technologies</p>
            <p className="text-sm leading-relaxed font-mono mt-2">
            Making payroll system website using ASP .NET Core MVC and API. Including reports using report builder and setting scheduler/background processing using Hangfire
            </p>
            <p className="text-sm font-mono text-gray-400">C# | Microsoft SQL Server | .NET Core | IIS</p>
          </div>
        </div>

        <br />

        <div className="mt-4 flex items-center">
          <p className="text-sm font-mono w-1/4">2023 - 2023</p>
          <div className="w-3/4 pl-4"> 
            <h3 className="text-yellow-400 font-bold mt-1">Freelance Web Developer</h3>
            <p className="text-yellow-400 text-xs">at PT. Global Data Inspirasi</p>
            <p className="text-sm leading-relaxed font-mono mt-2">
                Handle small tasks in .NET Core and Laravel-Reacts projects.
            </p>
            <p className="text-sm font-mono text-gray-400">Laravel | React</p>
          </div>
        </div>

        <br />

        <div className="mt-4 flex items-center">
          <p className="text-sm font-mono w-1/4">2021 - 2023</p>
          <div className="w-3/4 pl-4"> 
            <h3 className="text-yellow-400 font-bold mt-1">Freelance Odoo</h3>
            <p className="text-yellow-400 text-xs">at Remote Job</p>
            <p className="text-sm leading-relaxed font-mono mt-2">
                Handling several adjustment project for e-learning and website using Odoo
            </p>
            <p className="text-sm font-mono text-gray-400">Odoo 15 | Python | PostgresQL | XML | JavaScript</p>
          </div>
        </div>

        <br />

        <div className="mt-4 flex items-center">
          <p className="text-sm font-mono w-1/4">2020 - 2022</p>
          <div className="w-3/4 pl-4"> 
            <h3 className="text-yellow-400 font-bold mt-1">Assistant Lecturer</h3>
            <p className="text-yellow-400 text-xs">at AMIKOM University</p>
            <p className="text-sm leading-relaxed font-mono mt-2">
                Teach Advanced and Basic web programming course and Statistics Course
            </p>
            <p className="text-sm font-mono text-gray-400">HTML | CSS | Laravel | SPSS</p>
          </div>
        </div>
      </div>

      {/* projects */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Archive</h2>

        {/* Experience Item */}
        <div className="mt-4 flex items-center">
          <p className="text-sm font-mono w-1/4">2022-2025</p>
          <div className="w-3/4 pl-4"> 
            {/* <h3 className="text-yellow-400 font-bold mt-1">Payroll Management</h3> */}
            <h3 className="text-yellow-400 font-bold mt-1">
              <Link href="/myprojects/payrollmgt" className="hover:underline">
                Payroll Management
              </Link>
            </h3>
            <p className="text-sm leading-relaxed font-mono mt-2">
                On going. If there's time, I'll add it, okay?
            </p>
            <br />
            <h3 className="text-yellow-400 font-bold mt-1">Admin Dashboard Backoffice</h3>
            <p className="text-sm leading-relaxed font-mono mt-2">
                On going. If there's time, I'll add it, okay?
            </p>
            <br />
            <h3 className="text-yellow-400 font-bold mt-1">Inventory Management</h3>
            <p className="text-sm leading-relaxed font-mono mt-2">
                On going. If there's time, I'll add it, okay?
            </p>
            <br />
            <h3 className="text-yellow-400 font-bold mt-1">Handheld Inventory</h3>
            <p className="text-sm leading-relaxed font-mono mt-2">
                On going. If there's time, I'll add it, okay?
            </p>
            <br />
            <h3 className="text-yellow-400 font-bold mt-1">Hangfire Attendance Device</h3>
            <p className="text-sm leading-relaxed font-mono mt-2">
                On going. If there's time, I'll add it, okay?
            </p>
            <br />
            <h3 className="text-yellow-400 font-bold mt-1">Adjustment POS Odoo Module</h3>
            <p className="text-sm leading-relaxed font-mono mt-2">
                On going. If there's time, I'll add it, okay?
            </p>
            <br />
            <h3 className="text-yellow-400 font-bold mt-1">Laundry Management</h3>
            <p className="text-sm leading-relaxed font-mono mt-2">
                On going. If there's time, I'll add it, okay?
            </p>
            <br />
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="mt-6">
            <h2 className="text-2xl font-semibold">Links</h2>
            <div className="mt-4 flex flex-wrap items-center">
                <p className="text-xl font-mono w-full sm:w-1/4">Github</p>
                <div className="w-full sm:w-3/4 pl-4">
                <a
                    href="https://github.com/shafilahaf"
                    target="_blank"
                    className="text-yellow-400 font-bold hover:underline flex items-center"
                >
                    @shafilahaf
                </a>
                </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center">
                <p className="text-xl font-mono w-full sm:w-1/4">Email</p>
                <div className="w-full sm:w-3/4 pl-4">
                <a
                    href="mailto:shafilah.af@gmail.com"
                    className="text-yellow-400 font-bold hover:underline flex items-center"
                >
                    shafilah.af@gmail.com
                </a>
                </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center">
                <p className="text-xl font-mono w-full sm:w-1/4">LINE</p>
                <div className="w-full sm:w-3/4 pl-4">
                <a
                    href="https://line.me/ti/p/FdjASVLhqa"
                    target="_blank"
                    className="text-yellow-400 font-bold hover:underline flex items-center"
                >
                    @filah-
                </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Content2;
