'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { assets } from '../../../assets/assets';
import '../components_2/components_2.css';
import Link from 'next/link';


const Content2 = () => {
  const [isPayrollOpen, setIsPayrollOpen] = useState(false);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [isHandheldOpen, setIsHandheldOpen] = useState(false);
  const [isQrisOpen, setIsQrisOpen] = useState(false);

  
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
            {/* <h3 className="text-yellow-400 font-bold mt-1">
              <Link href="/myprojects/payrollmgt" className="hover:underline">
                Payroll Management
              </Link>
            </h3> */}
            {/* Payroll Management Section */}
            <h3 className="text-yellow-400 font-bold mt-1">
              <button 
                onClick={() => setIsPayrollOpen(true)} 
                className="hover:underline"
              >
                Payroll Management
              </button>
            </h3>
            <p className="text-sm leading-relaxed font-mono mt-2">
              Python | Odoo V.15 | PostgresQL
            </p>
            <br />

            {/* Payroll Management Modal */}
            {isPayrollOpen && (
              <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                <div className="relative w-full max-w-4xl bg-gray-800 text-white rounded-lg shadow-lg">
                  <div className="flex justify-between items-center p-5 border-b border-gray-700">
                    <h3 className="text-xs font-medium text-yellow-400">Payroll Management</h3>
                    <h3 className="text-xs font-medium text-yellow-400">Role: Technical Lead</h3>
                  </div>
                  <div className="p-5 overflow-y-auto max-h-[70vh]">
                    <p className="text-xs text-red-500 leading-relaxed mt-4">
                      <strong>Warning:</strong> The concept for this portfolio is still being developed.
                    </p>
                    <p className="text-xl text-yellow-400 leading-relaxed">Overview</p>
                    <p className="text-xs leading-relaxed mt-4">
                      Payroll Management helps companies manage salaries, bonuses, and deductions efficiently, while adapting to country-specific tax regulations and compliance requirements.
                    </p>
                    <br />
                    <p className="text-xl text-yellow-400 leading-relaxed">Concept</p>
                    <p className="text-xs leading-relaxed mt-4">
                    The system seamlessly integrates with an attendance device to monitor employee working hours in real time, ensuring accurate tracking of attendance, overtime, and leave. This data is then used to automatically calculate salaries, taking into account hourly rates, deductions, bonuses, and applicable tax regulations for each country.
                    </p>
                  </div>
                  <div className="flex justify-end p-5 border-t border-gray-700">
                    <button
                      onClick={() => setIsPayrollOpen(false)}
                      className="text-gray-300 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Inventory Management Section */}
            <h3 className="text-yellow-400 font-bold mt-1">
              <button 
                onClick={() => setIsInventoryOpen(true)} 
                className="hover:underline"
              >
                Inventory Mgt.
              </button>
            </h3>
            <p className="text-sm leading-relaxed font-mono mt-2">
              Python | Odoo V.15 | PostgresQL
            </p>
            <br />

            {/* Inventory Management Modal */}
            {isInventoryOpen && (
              <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                <div className="relative w-full max-w-4xl bg-gray-800 text-white rounded-lg shadow-lg">
                  <div className="flex justify-between items-center p-5 border-b border-gray-700">
                    <h3 className="text-xs font-medium text-yellow-400">Inventory Management</h3>
                    <h3 className="text-xs font-medium text-yellow-400">Role: Technical Lead</h3>
                  </div>
                  <div className="p-5 overflow-y-auto max-h-[70vh]">
                    <p className="text-xs text-red-500 leading-relaxed mt-4">
                      <strong>Warning:</strong> The concept for this portfolio is still being developed.
                    </p>
                    <p className="text-xl text-yellow-400 leading-relaxed">Overview</p>
                    <p className="text-xs leading-relaxed mt-4">
                      Inventory Management system helps track stock levels, purchases, and sales in real time.
                    </p>
                    <br />
                    <p className="text-xl text-yellow-400 leading-relaxed">Concept</p>
                    <p className="text-xs leading-relaxed mt-4">
                    The system enables comprehensive inventory management, including tracking stock levels, handling auctions, managing purchases and sales, and maintaining ledger entries for financial transparency. Additionally, it is designed to be accessible on handheld devices, allowing users to manage operations seamlessly from anywhere.
                    </p>
                  </div>
                  <div className="flex justify-end p-5 border-t border-gray-700">
                    <button
                      onClick={() => setIsInventoryOpen(false)}
                      className="text-gray-300 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Handheld Section */}
            <h3 className="text-yellow-400 font-bold mt-1">
              <button 
                onClick={() => setIsHandheldOpen(true)} 
                className="hover:underline"
              >
                Handheld Inventory
              </button>
            </h3>
            <p className="text-sm leading-relaxed font-mono mt-2">
              Python | Odoo V.15 | PostgresQL
            </p>
            <br />

            {/* Handheld Modal */}
            {isHandheldOpen && (
              <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                <div className="relative w-full max-w-4xl bg-gray-800 text-white rounded-lg shadow-lg">
                  <div className="flex justify-between items-center p-5 border-b border-gray-700">
                    <h3 className="text-xs font-medium text-yellow-400">Handheld Inventory</h3>
                    <h3 className="text-xs font-medium text-yellow-400">Role: Technical Lead</h3>
                  </div>
                  <div className="p-5 overflow-y-auto max-h-[70vh]">
                    <p className="text-xs text-red-500 leading-relaxed mt-4">
                      <strong>Warning:</strong> The concept for this portfolio is still being developed.
                    </p>
                    <p className="text-xl text-yellow-400 leading-relaxed">Overview</p>
                    <p className="text-xs leading-relaxed mt-4">
                        Handheld Inventory integrates Microsoft Business Central with Odoo via API, ensuring seamless synchronization of purchase, sales, and assembly records. Users create receipt in/out transactions in Odoo, while handymen scan items, instantly processing and updating data in Business Central.
                    </p>
                    <br />
                    <p className="text-xl text-yellow-400 leading-relaxed">Concept</p>
                    <p className="text-xs leading-relaxed mt-4">
                        The system streamlines inventory operations by automating data transfer between Odoo and Business Central. Handymen use handheld devices to scan items, triggering real-time updates, reducing manual input, and ensuring accurate stock management.
                    </p>
                  </div>
                  <div className="flex justify-end p-5 border-t border-gray-700">
                    <button
                      onClick={() => setIsHandheldOpen(false)}
                      className="text-gray-300 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Qris Section */}
            <h3 className="text-yellow-400 font-bold mt-1">
              <button 
                onClick={() => setIsQrisOpen(true)} 
                className="hover:underline"
              >
                QRIS POS Odoo
              </button>
            </h3>
            <p className="text-sm leading-relaxed font-mono mt-2">
              JavaScript | Odoo V.15 | PostgresQL
            </p>
            <br />

            {/* Qris Modal */}
            {isQrisOpen && (
              <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                <div className="relative w-full max-w-4xl bg-gray-800 text-white rounded-lg shadow-lg">
                  <div className="flex justify-between items-center p-5 border-b border-gray-700">
                    <h3 className="text-xs font-medium text-yellow-400">QRIS POS Odoo</h3>
                    <h3 className="text-xs font-medium text-yellow-400">Role: Technical Lead</h3>
                  </div>
                  <div className="p-5 overflow-y-auto max-h-[70vh]">
                    <p className="text-xs text-red-500 leading-relaxed mt-4">
                      <strong>Warning:</strong> The concept for this portfolio is still being developed.
                    </p>
                    <p className="text-xl text-yellow-400 leading-relaxed">Overview</p>
                    <p className="text-xs leading-relaxed mt-4">
                        The POS system integrates QRIS barcode functionality within Odoo, allowing seamless and dynamic payment processing. Customers can simply scan the QRIS code with the pre-set amount, eliminating the need for manual input and ensuring a faster, error-free transaction experience.                    </p>
                    <br />
                    <p className="text-xl text-yellow-400 leading-relaxed">Concept</p>
                    <p className="text-xs leading-relaxed mt-4">
                    By embedding QRIS barcode technology into the POS system, transactions become more efficient and user-friendly. The system generates a QR code with the exact payment amount, which customers can scan directly using their mobile banking apps or e-wallets, streamlining the checkout process.
                    </p>
                  </div>
                  <div className="flex justify-end p-5 border-t border-gray-700">
                    <button
                      onClick={() => setIsQrisOpen(false)}
                      className="text-gray-300 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}



            <h3 className="text-yellow-400 font-bold mt-1">Hangfire Attendance Device</h3>
            <p className="text-sm leading-relaxed font-mono mt-2">
                On going. If there's time, I'll add it, okay?
            </p>
            <br />

            <h3 className="text-yellow-400 font-bold mt-1">Admin Dashboard Backoffice</h3>
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
