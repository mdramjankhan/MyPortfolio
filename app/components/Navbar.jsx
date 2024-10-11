"use client";
import React from 'react';
import Link from 'next/link';
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { IoChatbubblesSharp } from "react-icons/io5";
import { AppContext } from "./AppContext";
import { useContext } from "react";
import { usePathname } from 'next/navigation';




export default function Navbar() {
    const { theme } = useContext(AppContext);
    const pathname = usePathname();

    return (
        <div> 
            {/* MOBILE FRIENDLY  */}
            <div className={`fixed bottom-0 w-full  z-10 lg:hidden  ${theme === "light" ? ("nav-Bcolor ") : ("nav-Wcolor text-slate-900")}`}>
                <ul className='w-full flex justify-around  p-2 rounded-full
            
            '>
                    <li
                        className={`bg-gray-200  w-12 h-12 flex items-center rounded-full
                            ${pathname=="/"? ("bg-yellow-500 text-white"):("bg-gray-200")}
                            `}
                    ><Link href="/" className='w-full' >
                            <FaHome className='size-5 w-full' />
                        </Link></li>
                    <li
                        className={`bg-gray-200 w-12 h-12 flex items-center rounded-full
                            ${pathname=="/about"? ("bg-yellow-500 text-white"):("bg-gray-200")}
                            `}
                    ><Link href="/about" className='w-full'>
                            <IoPerson className='size-5 w-full' />
                        </Link></li>
                    <li
                        className={`bg-gray-200 w-12 h-12 flex items-center rounded-full
                            ${pathname=="/portfolio"? ("bg-yellow-500 text-white"):("bg-gray-200")}
                            `}
                    ><Link href="/portfolio" className='w-full'>
                            <FaBriefcase className='size-5 w-full ' />
                        </Link></li>
                    <li
                        className={`bg-gray-200 w-12 h-12 flex items-center rounded-full
                            ${pathname=="/contact"? ("bg-yellow-500 text-white"):("bg-gray-200")}
                            `}
                    ><Link href="/contact" className='w-full'>
                            <MdMail className='size-5 w-full' />
                        </Link></li>
                    <li
                        className={`bg-gray-200 w-12 h-12 flex items-center rounded-full
                            ${pathname=="/blog"? ("bg-yellow-500 text-white"):("bg-gray-200")}
                            `}
                    ><Link href="/blog" className='w-full'>
                            <IoChatbubblesSharp className='size-5 w-full' />
                        </Link></li>
                </ul>
            </div>

            {/* LAPTOP FRIENDLY  */}
            <div className={`absolute invisible right-0  h-full z-10 lg:visible lg:bg-transparent  ${theme === "light" ? ("bg-blue-950 ") : ("bg-white text-slate-900")}`}>
                <ul className='w-full flex justify-around  p-5
                lg:flex-col lg:space-y-10 lg:mt-20 lg:pr-8
            '>
                    <li
                        className={`bg-gray-200 w-12 h-12 flex items-center rounded-full
                            ${pathname=="/"? ("bg-yellow-500 text-white"):("bg-gray-200")}
                            `}
                    ><Link href="/" className='w-full' >
                            <FaHome className='size-5 w-full ' />
                        </Link></li>
                    <li
                        className={`bg-gray-200 w-12 h-12 flex items-center rounded-full
                            ${pathname=="/about"? ("bg-yellow-500 text-white"):("bg-gray-200")}
                            `}
                    ><Link href="/about" className='w-full'>
                            <IoPerson className='size-5 w-full' />
                        </Link></li>
                    <li
                        className={`bg-gray-200 w-12 h-12 flex items-center rounded-full
                            ${pathname=="/portfolio"? ("bg-yellow-500 text-white"):("bg-gray-200")}
                            `}
                    ><Link href="/portfolio" className='w-full'>
                            <FaBriefcase className='size-5 w-full' />
                        </Link></li>
                    <li
                        className={`bg-gray-200 w-12 h-12 flex items-center rounded-full
                            ${pathname=="/contact"? ("bg-yellow-500 text-white"):("bg-gray-200")}
                            `}
                    ><Link href="/contact" className='w-full'>
                            <MdMail className='size-5 w-full ' />
                        </Link></li>
                    <li
                        className={`bg-gray-200 w-12 h-12 flex items-center rounded-full
                            ${pathname=="/blog"? ("bg-yellow-500 text-white"):("bg-gray-200")}
                            `}
                    ><Link href="/blog" className='w-full'>
                            <IoChatbubblesSharp className='size-5 w-full' />
                        </Link></li>
                </ul>
            </div>
        </div>
    )
}
