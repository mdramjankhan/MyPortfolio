import React from 'react';
import { IoIosMailOpen } from "react-icons/io";



export default function MailTag() {
    return (
        <div className="min-h-[76px] flex items-start gap-3"> 
            <div><IoIosMailOpen className="size-10 text-yellow-500"/></div>
            <div>
                <h1 className="uppercase font-medium opacity-60 mt-1">mail me</h1>
                <p className="font-medium"><email>rk9032929@gmail.com</email></p>
            </div>
        </div>
    )
};