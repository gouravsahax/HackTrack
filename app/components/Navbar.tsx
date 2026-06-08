import React from 'react';
import Image from "next/image";
import logo from '../../public/favicons/favicon-32x32.png'

function Navbar() {
    return (
        <div className={`w-full`}>
            {/* The background stays 100% black until the 90% mark, then fades to transparent in the remaining 10% */}
            <div className={`w-full flex justify-between items-center px-6 py-4 bg-linear-to-b from-black from-70% to-transparent`}>
                <div className={`flex gap-3 text-[20px] pixelify-sans-100 text-[#AAFF00]`}>
                    <Image
                        src={logo}
                        alt="logo"
                        width={25}
                    />
                    HackTrack
                </div>

                <div className={`text-white`}>
                    profile
                </div>
            </div>
        </div>
    );
}

export default Navbar;