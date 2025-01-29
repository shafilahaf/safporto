import React from "react";
import Image from 'next/image';
import { assets } from "../../../assets/assets";

const Expertise = () => {
    return (
        <div id="expertise" className="w-full h-screen flex items-center justify-center bg-white">
            <div className="w-full max-w-6xl px-8 text-center">
                {/* Title */}
                <h2 className="text-4xl font-semibold mb-8">My Expertise</h2>
                
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-16">
                    {/* Left Column */}
                    <div className="flex-1 border-2 border-black p-8 rounded-md">
                        <div className="flex mb-4 justify-center md:justify-start">
                            <Image src={assets.monitor} alt="Software Development" width={60} height={60} />
                            <h3 className="text-2xl font-semibold text-black pr-8">Software Development</h3>
                        </div>
                        <p className="text-sm mt-2">
                            Experienced in both functional and OOP: Python, JavaScript, C#.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="flex-1 border-2 border-black p-8 rounded-md">
                        <div className="flex mb-4 justify-center md:justify-start">
                            <Image src={assets.odoo} alt="Odoo Development" width={60} height={60} />
                            <h3 className="text-2xl font-semibold text-black pr-8">Odoo Development</h3>
                        </div>
                        <p className="text-sm mt-2">Customizing and Developing Odoo modules, managing ERP processes, and improving business workflows.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise;
