import React from 'react';
import { IoMdCall } from "react-icons/io";


export default function ContactTag() {
    return (
        <div className="min-h-[76px] flex items-start gap-3"> 
            <div><IoMdCall className="size-10 text-yellow-500"/></div>
            <div>
                <h1 className="uppercase font-medium opacity-60 mt-1">call me</h1>
                <p className="font-medium"><tel>+91 7872857822</tel></p>
            </div>
        </div>
    )
};