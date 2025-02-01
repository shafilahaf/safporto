// 'use client'
// import Image from 'next/image';
// import React from 'react';
// import { assets } from '../../../assets/assets';

// const MyContent = () => {
//   return (
//     <div style={{ maxWidth: '8.27in', margin: 'auto', padding: '1in', color: 'white' }}>
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         {/* Left Photo */}
//         <div style={{ flex: 1, paddingRight: '20px', paddingBottom: '15px' }}>
//             <Image src={assets.ucing} alt='' />
//         </div>

//         {/* Right Description */}
//         <div style={{ flex: 2 }}>
//             <h1 style={{ fontSize: '30px' }}>SHAFILAH AF</h1>
//             <p style={{ fontSize: '20px', marginTop: '5px', fontWeight:'normal', fontFamily:'monospace' }}>SOFTWARE ENGINEER, BACK END & APP DEVELOPER</p>
//         </div>
//       </div>

//         {/* about */}
//         <div>
//             <h2>About</h2>
//             <p style={{ fontSize: '15px', lineHeight: '1.6', paddingTop: '10px', fontWeight:'normal', fontFamily:'monospace', paddingBottom: '15px' }}>
//                 Hi, I'm Fila, a Software Engineer skilled in Python, JavaScript, and C#. <br/> 
//                 I specialize in building efficient back-end systems and apps, with experience in developing and customizing Odoo solutions to streamline business processes.
//             </p>
//         </div>

        // {/* work experience */}
        // <div style={{ marginTop: '20px' }}>
        //     <h2>Work Experience</h2>

        //     {/* Experience Item */}
        //     <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        //         <div style={{ flex: 1, textAlign: 'left', paddingTop: '10px' }}>
        //             <p style={{ fontSize: '14px', fontWeight: 'bold', fontWeight:'normal', fontFamily:'monospace' }}>2022 - Present</p>
        //         </div>
        //         <div style={{ flex: 3, paddingTop: '10px' }}>
        //             <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Odoo Developer</h3>
        //             <p style={{ fontSize: '14px', color: 'yellow', margin: '5px 0', fontWeight:'bold', fontFamily:'monospace' }}>at Trusta Technologies</p>
        //             <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
        //                 Lead Odoo development at Trusta Technologies, focusing on custom module creation, payroll management, and system optimization. I manage backend operations, API integrations, and enhance Odoo POS functionality. Additionally, I oversee the helpdesk system and support customer queries.
        //             </p>
        //             <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace', color:'grey' }}>
        //                 Python | PostgresQL | XML | JavaScript
        //             </p>
        //             <br />
        //             <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Business Central Developer</h3>
        //             <p style={{ fontSize: '14px', color: 'yellow', margin: '5px 0', fontWeight:'bold', fontFamily:'monospace' }}>at Trusta Technologies</p>
        //             <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
        //                 Develop custom modules within Business Central that are not present in the standard Business Central package. Examples included modules for Purchase Requests and custom extensions.
        //             </p>
        //             <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace', color:'grey' }}>
        //                 C/AL | Microsoft SQL Server | Microsoft Dynamics 365
        //             </p>
        //             <br />
        //             <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>.NET CORE Developer</h3>
        //             <p style={{ fontSize: '14px', color: 'yellow', margin: '5px 0', fontWeight:'bold', fontFamily:'monospace' }}>at Trusta Technologies</p>
        //             <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
        //                 Making payroll system website using ASP .NET Core MVC and API. Including reports using report builder and setting scheduler/background processing using Hangfire
        //             </p>
        //             <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace', color:'grey' }}>
        //                 C# | Microsoft SQL Server | .NET Core
        //             </p>
        //         </div>
                
        //     </div>

        //     <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        //         <div style={{ flex: 1, textAlign: 'left', paddingTop: '10px' }}>
        //             <p style={{ fontSize: '14px', fontWeight: 'bold', fontWeight:'normal', fontFamily:'monospace' }}>2023 - 2023</p>
        //         </div>
        //         <div style={{ flex: 3, paddingTop: '10px' }}>
        //             <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Freelance Web Developer</h3>
        //             <p style={{ fontSize: '14px', color: 'yellow', margin: '5px 0', fontWeight:'bold', fontFamily:'monospace' }}>at PT. Global Data Inspirasi</p>
        //             <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
        //                 Handle small tasks in .NET Core and Laravel-Reacts projects.
        //             </p>
        //             <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace', color:'grey' }}>
        //                 Laravel | React
        //             </p>
        //         </div>
        //     </div>

        //     <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        //         <div style={{ flex: 1, textAlign: 'left', paddingTop: '10px' }}>
        //             <p style={{ fontSize: '14px', fontWeight: 'bold', fontWeight:'normal', fontFamily:'monospace' }}>2021 - 2023</p>
        //         </div>
        //         <div style={{ flex: 3, paddingTop: '10px' }}>
        //             <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Freelance Odoo</h3>
        //             <p style={{ fontSize: '14px', color: 'yellow', margin: '5px 0', fontWeight:'bold', fontFamily:'monospace' }}>at Remote Job</p>
        //             <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
        //                 Handling several adjustment project for e-learning and website using Odoo
        //             </p>
        //             <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace', color:'grey' }}>
        //                 Odoo 15 | Python | PostgresQL | XML | JavaScript
        //             </p>
        //         </div>
        //     </div>

        //     <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        //         <div style={{ flex: 1, textAlign: 'left', paddingTop: '10px' }}>
        //             <p style={{ fontSize: '14px', fontWeight: 'bold', fontWeight:'normal', fontFamily:'monospace' }}>2020 - 2022</p>
        //         </div>
        //         <div style={{ flex: 3, paddingTop: '10px' }}>
        //             <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Assistant Lecturer</h3>
        //             <p style={{ fontSize: '14px', color: 'yellow', margin: '5px 0', fontWeight:'bold', fontFamily:'monospace' }}>at AMIKOM University</p>
        //             <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
        //                 Teach Advanced and Basic web programming course and Statistics Course
        //             </p>
        //             <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace', color:'grey' }}>
        //                 HTML | CSS | Laravel | SPSS
        //             </p>
        //         </div>
        //     </div>

        // </div>

        // {/* projects */}
        // <div style={{ marginTop: '20px' }}>
        //     <h2>Archive</h2>

        //     {/* Experience Item */}
        //     <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        //         <div style={{ flex: 1, textAlign: 'left', paddingTop: '10px' }}>
        //             <p style={{ fontSize: '14px', fontWeight: 'bold', fontWeight:'normal', fontFamily:'monospace' }}>2024</p>
        //         </div>
        //         <div style={{ flex: 3, paddingTop: '10px' }}>
        //             <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Payroll Management</h3>
        //             <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
        //                 On going. If there's time, I'll add it, okay?
        //             </p>
        //             <br />

        //             <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Admin Dashboard Backoffice</h3>
        //             <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
        //                 On going. If there's time, I'll add it, okay?
        //             </p>
        //             <br />

        //             <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Inventory Management</h3>
        //             <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
        //                 On going. If there's time, I'll add it, okay?
        //             </p>
        //             <br />

        //             <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Handheld Inventory</h3>
        //             <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
        //                 On going. If there's time, I'll add it, okay?
        //             </p>
        //             <br />

        //             <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Hangfire Attendance Device</h3>
        //             <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
        //                 On going. If there's time, I'll add it, okay?
        //             </p>
        //             <br />

        //             <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Adjustment POS Odoo Module</h3>
        //             <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
        //                 On going. If there's time, I'll add it, okay?
        //             </p>
        //             <br />

        //             <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Laundry Management</h3>
        //             <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
        //                 On going. If there's time, I'll add it, okay?
        //             </p>
        //             <br />
        //         </div>
        //     </div>
        // </div>

        // {/* links */}
        // <div style={{ marginTop: '20px' }}>
        //     <h2>Links</h2>

        //     {/* Experience Item */}
        //     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        //         <div style={{ flex: 1, textAlign: 'left', paddingTop: '10px' }}>
        //             <p style={{ fontSize: '15px', fontWeight: 'bold', fontWeight:'normal', fontFamily:'monospace' }}>Github</p>
        //         </div>
        //         <div style={{ flex: 3, paddingTop: '10px' }}>
        //             <a href="https://github.com/shafilahaf" target="_blank" style={{ fontSize: '15px', color: 'yellow', margin: 0, fontWeight: 'bolder', fontFamily: 'monospace', textDecoration: 'none' }}>
        //                 @shafilahaf
        //             </a>
        //         </div>
        //     </div>

        //     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        //         <div style={{ flex: 1, textAlign: 'left', paddingTop: '10px' }}>
        //             <p style={{ fontSize: '15px', fontWeight: 'bold', fontWeight:'normal', fontFamily:'monospace' }}>Email</p>
        //         </div>
        //         <div style={{ flex: 3, paddingTop: '10px' }}>
        //             <a href="mailto:shafilah.af@gmail.com" style={{ fontSize: '15px', color: 'yellow', margin: 0, fontWeight: 'bolder', fontFamily: 'monospace', textDecoration: 'none' }}>
        //                 shafilah.af@gmail.com
        //             </a>
        //         </div>
        //     </div>

        //     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        //         <div style={{ flex: 1, textAlign: 'left', paddingTop: '10px' }}>
        //             <p style={{ fontSize: '15px', fontWeight: 'bold', fontWeight:'normal', fontFamily:'monospace' }}>LINE</p>
        //         </div>
        //         <div style={{ flex: 3, paddingTop: '10px' }}>
        //             <a href="https://line.me/ti/p/FdjASVLhqa" style={{ fontSize: '15px', color: 'yellow', margin: 0, fontWeight: 'bolder', fontFamily: 'monospace', textDecoration: 'none' }}>
        //                 @filah-
        //             </a>
        //         </div>
        //     </div>


        // </div>


//     </div>
//   );
// };

// export default MyContent;

'use client'
import Image from 'next/image';
import React from 'react';
import { assets } from '../../../assets/assets';

const MyContent = () => {
  return (
    <div style={{ maxWidth: '8.27in', margin: 'auto', padding: '1in', color: 'white' }}>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        {/* Left Photo */}
        <div style={{ flex: '1 1 30%', paddingRight: '20px', paddingBottom: '15px' }}>
          <Image src={assets.filol} alt='' style={{
              width: '100%',
              height: 'auto',
              borderRadius: '50%',  // Make the image circular
              objectFit: 'cover', // Ensure the image covers the area without distortion
              maxWidth: '150px', // Optional: Limit the size of the circle
              maxHeight: '150px'  // Optional: Limit the size of the circle
            }} />
        </div>

        {/* Right Description */}
        <div style={{ flex: '1 1 60%' }}>
          <h1 style={{ fontSize: '2rem' }}>SHAFILAH AF</h1>
          <p style={{ fontSize: '1.2rem', marginTop: '5px', fontWeight: 'normal', fontFamily: 'monospace' }}>
            SOFTWARE ENGINEER, BACK END & APP DEVELOPER
          </p>
        </div>
      </div>

      {/* About */}
      <div>
        <h2>About</h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', paddingTop: '10px', fontWeight: 'normal', fontFamily: 'monospace', paddingBottom: '15px' }}>
          Hi, I'm Fila, a Software Engineer skilled in Python, JavaScript, and C#. <br />
          I specialize in building efficient back-end systems and apps, with experience in developing and customizing Odoo solutions to streamline business processes.
        </p>
      </div>

              {/* work experience */}
              <div style={{ marginTop: '20px' }}>
            <h2>Work Experience</h2>

            {/* Experience Item */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <div style={{ flex: 1, textAlign: 'left', paddingTop: '10px' }}>
                    <p style={{ fontSize: '14px', fontWeight: 'bold', fontWeight:'normal', fontFamily:'monospace' }}>2022 - Present</p>
                </div>
                <div style={{ flex: 3, paddingTop: '10px' }}>
                    <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Odoo Developer</h3>
                    <p style={{ fontSize: '14px', color: 'yellow', margin: '5px 0', fontWeight:'bold', fontFamily:'monospace' }}>at Trusta Technologies</p>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
                        Lead Odoo development at Trusta Technologies, focusing on custom module creation, payroll management, and system optimization. I manage backend operations, API integrations, and enhance Odoo POS functionality. Additionally, I oversee the helpdesk system and support customer queries.
                    </p>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace', color:'grey' }}>
                        Python | PostgresQL | XML | JavaScript
                    </p>
                    <br />
                    <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Business Central Developer</h3>
                    <p style={{ fontSize: '14px', color: 'yellow', margin: '5px 0', fontWeight:'bold', fontFamily:'monospace' }}>at Trusta Technologies</p>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
                        Develop custom modules within Business Central that are not present in the standard Business Central package. Examples included modules for Purchase Requests and custom extensions.
                    </p>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace', color:'grey' }}>
                        C/AL | Microsoft SQL Server | Microsoft Dynamics 365
                    </p>
                    <br />
                    <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>.NET CORE Developer</h3>
                    <p style={{ fontSize: '14px', color: 'yellow', margin: '5px 0', fontWeight:'bold', fontFamily:'monospace' }}>at Trusta Technologies</p>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
                        Making payroll system website using ASP .NET Core MVC and API. Including reports using report builder and setting scheduler/background processing using Hangfire
                    </p>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace', color:'grey' }}>
                        C# | Microsoft SQL Server | .NET Core
                    </p>
                </div>
                
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <div style={{ flex: 1, textAlign: 'left', paddingTop: '10px' }}>
                    <p style={{ fontSize: '14px', fontWeight: 'bold', fontWeight:'normal', fontFamily:'monospace' }}>2023 - 2023</p>
                </div>
                <div style={{ flex: 3, paddingTop: '10px' }}>
                    <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Freelance Web Developer</h3>
                    <p style={{ fontSize: '14px', color: 'yellow', margin: '5px 0', fontWeight:'bold', fontFamily:'monospace' }}>at PT. Global Data Inspirasi</p>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
                        Handle small tasks in .NET Core and Laravel-Reacts projects.
                    </p>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace', color:'grey' }}>
                        Laravel | React
                    </p>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <div style={{ flex: 1, textAlign: 'left', paddingTop: '10px' }}>
                    <p style={{ fontSize: '14px', fontWeight: 'bold', fontWeight:'normal', fontFamily:'monospace' }}>2021 - 2023</p>
                </div>
                <div style={{ flex: 3, paddingTop: '10px' }}>
                    <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Freelance Odoo</h3>
                    <p style={{ fontSize: '14px', color: 'yellow', margin: '5px 0', fontWeight:'bold', fontFamily:'monospace' }}>at Remote Job</p>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
                        Handling several adjustment project for e-learning and website using Odoo
                    </p>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace', color:'grey' }}>
                        Odoo 15 | Python | PostgresQL | XML | JavaScript
                    </p>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <div style={{ flex: 1, textAlign: 'left', paddingTop: '10px' }}>
                    <p style={{ fontSize: '14px', fontWeight: 'bold', fontWeight:'normal', fontFamily:'monospace' }}>2020 - 2022</p>
                </div>
                <div style={{ flex: 3, paddingTop: '10px' }}>
                    <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Assistant Lecturer</h3>
                    <p style={{ fontSize: '14px', color: 'yellow', margin: '5px 0', fontWeight:'bold', fontFamily:'monospace' }}>at AMIKOM University</p>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
                        Teach Advanced and Basic web programming course and Statistics Course
                    </p>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace', color:'grey' }}>
                        HTML | CSS | Laravel | SPSS
                    </p>
                </div>
            </div>

        </div>

        {/* projects */}
        <div style={{ marginTop: '20px' }}>
            <h2>Archive</h2>

            {/* Experience Item */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <div style={{ flex: 1, textAlign: 'left', paddingTop: '10px' }}>
                    <p style={{ fontSize: '14px', fontWeight: 'bold', fontWeight:'normal', fontFamily:'monospace' }}>2024</p>
                </div>
                <div style={{ flex: 3, paddingTop: '10px' }}>
                    <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Payroll Management</h3>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
                        On going. If there's time, I'll add it, okay?
                    </p>
                    <br />

                    <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Admin Dashboard Backoffice</h3>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
                        On going. If there's time, I'll add it, okay?
                    </p>
                    <br />

                    <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Inventory Management</h3>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
                        On going. If there's time, I'll add it, okay?
                    </p>
                    <br />

                    <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Handheld Inventory</h3>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
                        On going. If there's time, I'll add it, okay?
                    </p>
                    <br />

                    <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Hangfire Attendance Device</h3>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
                        On going. If there's time, I'll add it, okay?
                    </p>
                    <br />

                    <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Adjustment POS Odoo Module</h3>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
                        On going. If there's time, I'll add it, okay?
                    </p>
                    <br />

                    <h3 style={{ fontSize: '18px',color: 'yellow', margin: 0, fontWeight:'bolder', fontFamily:'monospace' }}>Laundry Management</h3>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', fontWeight:'bold', fontFamily:'monospace' }}>
                        On going. If there's time, I'll add it, okay?
                    </p>
                    <br />
                </div>
            </div>
        </div>

        {/* links */}
        <div style={{ marginTop: '20px' }}>
            <h2>Links</h2>

            {/* Experience Item */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, textAlign: 'left', paddingTop: '10px' }}>
                    <p style={{ fontSize: '15px', fontWeight: 'bold', fontWeight:'normal', fontFamily:'monospace' }}>Github</p>
                </div>
                <div style={{ flex: 3, paddingTop: '10px' }}>
                    <a href="https://github.com/shafilahaf" target="_blank" style={{ fontSize: '15px', color: 'yellow', margin: 0, fontWeight: 'bolder', fontFamily: 'monospace', textDecoration: 'none' }}>
                        @shafilahaf
                    </a>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, textAlign: 'left', paddingTop: '10px' }}>
                    <p style={{ fontSize: '15px', fontWeight: 'bold', fontWeight:'normal', fontFamily:'monospace' }}>Email</p>
                </div>
                <div style={{ flex: 3, paddingTop: '10px' }}>
                    <a href="mailto:shafilah.af@gmail.com" style={{ fontSize: '15px', color: 'yellow', margin: 0, fontWeight: 'bolder', fontFamily: 'monospace', textDecoration: 'none' }}>
                        shafilah.af@gmail.com
                    </a>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, textAlign: 'left', paddingTop: '10px' }}>
                    <p style={{ fontSize: '15px', fontWeight: 'bold', fontWeight:'normal', fontFamily:'monospace' }}>LINE</p>
                </div>
                <div style={{ flex: 3, paddingTop: '10px' }}>
                    <a href="https://line.me/ti/p/FdjASVLhqa" style={{ fontSize: '15px', color: 'yellow', margin: 0, fontWeight: 'bolder', fontFamily: 'monospace', textDecoration: 'none' }}>
                        @filah-
                    </a>
                </div>
            </div>


        </div>

    </div>
  );
};

export default MyContent;

