'use client'

import Image from "next/image";
import logo from '../../public/favicons/android-chrome-192x192.png'
import Link from "next/link";

function Navbar() {
    return (
        <div className={`w-full`}>
            <div className={`text-[#AAFF00] w-full flex justify-between items-center px-6 py-4 bg-black`}>
                <div className={`flex gap-3 justify-center items-center`}>
                    <Image
                        src={logo}
                        alt="logo"
                        width={28}
                    />
                    <h1 className="text-3xl">HackTrack</h1>
                </div>

                <div className={`flex gap-4 text-xl`}>
                    <Link href={`/create`}>Create</Link>
                    <Link href={`/profile`}>Profile</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;