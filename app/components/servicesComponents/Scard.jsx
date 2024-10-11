import React from 'react';
import Image from 'next/image';
// import img from "../../assets/imgs/2.jpeg";
import { useContext } from 'react';
import { AppContext } from '../AppContext';

export default function Scard({ img, name, text}) {
    const {theme} = useContext(AppContext);
    
    return (
        <div className='w-[18rem] h-[22rem] min-w-[18rem] min-h-[25rem] md:h-[25rem] md:w-[21rem] rounded-md overflow-hidden hover:cursor-pointer'>
            <div className='w-full h-1/2 overflow-hidden'>
                <Image src={img} alt='' className='h-full hover:scale-110 transition-all duration-200 ' />
            </div>
            <div className={`w-full h-1/2  ${theme === "light" ? ("bg-[#232323] text-yellow-50") : ("bg-[#f1f1ee]")} `}>
                <div className='h-1 w-full bg-yellow-400'></div>
                <div className='pl-4 pt-4 pr-4'>
                    <h1 className='font-semibold text-xl opacity-80 hover:text-yellow-500 transition-all duration-200'>{name}</h1>
                    <p className='mt-2 opacity-65'>{text}</p>
                </div>
            </div>

        </div>
    )
}
