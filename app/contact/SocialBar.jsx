import React from 'react';
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AppContext } from '../components/AppContext';
import { useContext } from "react";


export default function SocialBar() {
    const { theme } = useContext(AppContext);
    return (
        <div className="flex gap-2">
            {/* facebook */}
            <li
                className={`${theme==="light"?("bg-gray-600 "):("bg-gray-200 ")}  w-10 h-10 flex items-center rounded-full `}>
                    <Link href="/" className='w-full' >
                    <FaFacebookF className='size-5 w-full' />
                </Link>
            </li>
            {/* intagram */}
            <li
                className={`${theme==="light"?("bg-gray-600 "):("bg-gray-200 ")}  w-10 h-10 flex items-center rounded-full `}>
                    <Link href="/" className='w-full' >
                    <FaInstagram className='size-5 w-full' />
                </Link>
            </li>
            {/* linkdn */}
            <li
                className={`${theme==="light"?("bg-gray-600 "):("bg-gray-200 ")}  w-10 h-10 flex items-center rounded-full `}>
                    <Link href="/" className='w-full' >
                    <FaLinkedinIn className='size-5 w-full' />
                </Link>
            </li>
            {/* github */}
            <li
                className={`${theme==="light"?("bg-gray-600 "):("bg-gray-200 ")} w-10 h-10 flex items-center rounded-full `}>
                    <Link href="/" className='w-full' >
                    <FaGithub className='size-5 w-full' />
                </Link>
            </li>
        </div>
    )
}
