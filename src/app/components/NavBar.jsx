'use client'
import Image from "next/image";
import React, { useRef } from "react";
import { assets } from "../../../assets/assets";

const Navbar = () => {
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(0)';
    }
    
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    const myName = '/SAF/';

    return(
        <>
            <nav className="w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-white">
                <a href="">
                    {/* <Image src={assets.cobalogonav} className="w-28 cursor-pointer mr-14" alt="Logo"/> */}
                    {myName}
                </a>

                <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
                    <li><a href="#home" className="flex items-center text-xs"><sup className="mr-1">01</sup>home</a></li>
                    <li><a href="#expertise" className="flex items-center text-xs"><sup className="mr-1">02</sup>expertise</a></li>
                    <li><a href="#work" className="flex items-center text-xs"><sup className="mr-1">03</sup>work</a></li>
                    <li><a href="#experience" className="flex items-center text-xs"><sup className="mr-1">04</sup>experience</a></li>
                    <li><a href="#contact" className="flex items-center text-xs"><sup className="mr-1">05</sup>contact</a></li>
                </ul>

                <div className="flex items-center gap-4">
                    <button>
                        <Image src={assets.moon} alt='' className="w-6" />
                    </button>

                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Image src={assets.list} alt='' className="w-6" />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-black transition-transform duration-500" onClick={closeMenu}>
                    <div className="absolute right-6 top-6">
                        <Image src={assets.deleted} alt='' className="w-8 cursor-pointer" />
                    </div>

                    <li><a href="#home" className="flex items-center text-xs text-white" onClick={closeMenu}><sup className="mr-1">01</sup>home</a></li>
                    <li><a href="#expertise" className="flex items-center text-xs text-white" onClick={closeMenu}><sup className="mr-1">02</sup>expertise</a></li>
                    <li><a href="#work" className="flex items-center text-xs text-white" onClick={closeMenu} ><sup className="mr-1">03</sup>work</a></li>
                    <li><a href="#experience" className="flex items-center text-xs text-white" onClick={closeMenu}><sup className="mr-1">04</sup>experience</a></li>
                    <li><a href="#contact" className="flex items-center text-xs text-white" onClick={closeMenu}><sup className="mr-1">05</sup>contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
