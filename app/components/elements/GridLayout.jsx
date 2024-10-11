import React from 'react';
import Image from 'next/image';
import img1 from "../../assets/imgs/1.jpeg";
import img2 from "../../assets/imgs/2.jpeg";
import img3 from "../../assets/imgs/3.jpeg";
import img4 from "../../assets/imgs/4.jpeg";
import img5 from "../../assets/imgs/5.jpeg";
import img6 from "../../assets/imgs/6.jpeg";
import img7 from "../../assets/imgs/7.jpeg";
import img8 from "../../assets/imgs/8.jpeg";
import img9 from "../../assets/imgs/9.jpeg";
import img10 from "../../assets/imgs/10.jpeg";
import img11 from "../../assets/imgs/11.jpeg";
import img12 from "../../assets/imgs/12.jpeg";
import img13 from "../../assets/imgs/13.jpeg";
import img14 from "../../assets/imgs/14.jpeg";
import img15 from "../../assets/imgs/15.jpeg";





export default function GridLayout() {
    return (
        <div className='mt-10 p-2 columns-[150px] md:columns-[240px] lg:columns-[280px] '>
            <Image src={img1} alt='' className='rounded-2xl mb-3 hover:scale-95 transition-all duration-200 autoShow ' />
            <Image src={img2} alt='' className='rounded-2xl mb-3 hover:scale-95 transition-all duration-200 autoShow'/>
            <Image src={img3} alt='' className='rounded-2xl mb-3 hover:scale-95 transition-all duration-200 autoShow'/>
            <Image src={img4} alt='' className='rounded-2xl mb-3 hover:scale-95 transition-all duration-200 autoShow'/>
            <Image src={img5} alt='' className='rounded-2xl mb-3 hover:scale-95 transition-all duration-200 autoShow'/>
            <Image src={img6} alt='' className='rounded-2xl mb-3 hover:scale-95 transition-all duration-200 autoShow'/>
            <Image src={img7} alt='' className='rounded-2xl mb-3 hover:scale-95 transition-all duration-200 autoShow'/>
            <Image src={img8} alt='' className='rounded-2xl mb-3 hover:scale-95 transition-all duration-200 autoShow'/>
            <Image src={img9} alt='' className='rounded-2xl mb-3 hover:scale-95 transition-all duration-200 autoShow'/>
            <Image src={img10} alt='' className='rounded-2xl mb-3 hover:scale-95 transition-all duration-200 autoShow'/>
            <Image src={img11} alt='' className='rounded-2xl mb-3 hover:scale-95 transition-all duration-200 autoShow'/>
            <Image src={img12} alt='' className='rounded-2xl mb-3 hover:scale-95 transition-all duration-200 autoShow'/>
            <Image src={img13} alt='' className='rounded-2xl mb-3 hover:scale-95 transition-all duration-200 autoShow'/>
            <Image src={img14} alt='' className='rounded-2xl mb-3 hover:scale-95 transition-all duration-200 autoShow'/>
            <Image src={img15} alt='' className='rounded-2xl mb-3 hover:scale-95 transition-all duration-200 autoShow'/>
        </div>
    )
}
