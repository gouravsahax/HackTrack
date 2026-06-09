'use client'

import Image from "next/image";
import logo from '../../public/favicons/android-chrome-192x192.png'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {ReactElement} from "react";

function Navbar(): ReactElement {
    const pathname: string = usePathname();

    return (
        <div className="w-full z-20 sticky top-0">
            <div className={`text-[#AAFF00] w-full flex justify-between items-center px-6 py-2`}>
                <div className="flex items-center gap-2 mr-6">
                    <Image src={logo} alt="logo" width={18}/>
                    <span className="text-[#AAFF00] text-sm font-semibold tracking-[0.15em] uppercase hidden md:inline-flex">HackTrack
                    </span>
                </div>

                <div className={`flex gap-4 text-xl`}>
                    <Link href={`/`}><span className={`text-[#AAFF00] text-sm font-semibold tracking-[0.15em] ${pathname === "/" ? "border-b-2 border-[#AAFF00] pb-1" : ""} cursor-pointer`}>Events</span></Link>
                    <Link href={`/create`}><span className={`text-[#AAFF00] text-sm font-semibold tracking-[0.15em] ${pathname === "/create" ? "border-b-2 border-[#AAFF00] pb-1" : ""}`}>Create</span></Link>
                    <Link href={`/profile`}><span className={`text-[#AAFF00] text-sm font-semibold tracking-[0.15em] ${pathname === "/profile" ? "border-b-2 border-[#AAFF00] pb-1" : ""}`}>Profile</span></Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;