'use client'

import Image from "next/image";
import logo from '../../public/favicons/android-chrome-192x192.png'
import Link from "next/link";

function Navbar() {
    return (
        <div className={`w-full`}>
            <div className={`text-[#AAFF00] w-full flex justify-between items-center px-6 py-2 bg-black`}>
                <div className="flex items-center gap-2 mr-6">
                    <Image src={logo} alt="logo" width={18} />
                    <span className="text-[#AAFF00] text-sm font-semibold tracking-[0.15em] uppercase">HackTrack</span>
                </div>

                <div className={`flex gap-4 text-xl`}>
                    <Link href={`/create`}><span className="text-[#AAFF00] text-sm font-semibold tracking-[0.15em]">Create</span></Link>
                    <Link href={`/profile`}><span className="text-[#AAFF00] text-sm font-semibold tracking-[0.15em]">Profile</span></Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;