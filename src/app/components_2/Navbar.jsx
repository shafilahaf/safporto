'use client'
import React, { useState, useEffect } from "react";
import { assets } from "../../../assets/assets";

const Navbar2 = () => {
    const myName = '/SAF/';
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            setCurrentTime(formattedTime);
        };

        const interval = setInterval(updateTime, 1000);
        updateTime();
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-black text-white">
            <a href="">
                <span>{myName}</span>
            </a>

            <div className="flex items-center gap-4">
                <button>
                    <span>{currentTime}</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar2;
