import Image from "next/image";
import React from "react";
import { assets } from "../../../assets/assets";

const Header = () => {
    const myTitle = '< SOFTWARE ENGINEER, BACK END & APP DEVELOPER >'
    return (
        <div id='home' className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <div>
                <div className="flex items-end gap-2 text-5xl md:text-6xl mb-3 font-bold"> {/* Custom class for large text */}
                    SHAFILAH AF
                    <Image src={assets.hand_icon} alt='' className="w-10" />
                </div>
                <br />
                <h2>
                    {myTitle}
                </h2>
            </div>
        </div>
    );
}

export default Header