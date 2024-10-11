import React from 'react';
import { FaMapLocationDot } from "react-icons/fa6";


export default function MapTag() {
    return (
        <div className="min-h-[76px] flex items-start gap-3"> 
            <div><FaMapLocationDot className="size-10 text-yellow-500"/></div>
            <div>
                <h1 className="uppercase font-medium opacity-60 mt-1">Address Point</h1>
                <p className="font-medium">123 Stree New York City , United States Of America 750065.</p>
            </div>
        </div>
    )
};