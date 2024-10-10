"use client";
import React from 'react';
import { AppContext } from './AppContext';
import { useContext } from "react";
import Bbtn from './buttons/Bbtn';

export default function Infos({firstName, lastName, age, phone,email, theme}) {
    // const { theme } = useContext(AppContext);
    return (
        <>
        <div className={` w-full  flex flex-col lg:flex-row justify-between text-wrap ${theme === "light"?("text-yellow-50"):("text-black")}`}> 
            {/* left  */}
            <div className="gap-5 hidden md:block">
                <p><span className=" opacity-75">First Name:</span> <span className="font-semibold">{firstName}</span></p>
                <p><span className=" opacity-75">Age: </span><span className="font-semibold">{age}</span> </p> 
                <p><span className=" opacity-75">Freelance: </span><span className="font-semibold text-green-500">Available</span> </p>
                <p><span className=" opacity-75">Phone:</span> <span className="font-semibold">{phone}</span></p>
                <p><span className=" opacity-75">WhatsApp:</span> <span className="font-semibold">{phone}</span></p>
            </div>

            {/* right  */}
            <div className="gap-5 hidden md:block">
                <p><span className=" opacity-75">Last Name: </span><span className="font-semibold">{lastName}</span></p>
                <p><span className=" opacity-75">Nationality:</span> <span className="font-semibold">India</span> </p> 
                <p><span className=" opacity-75">Address:</span> <span className="font-semibold">West Bengal, India</span></p>
                <p><span className=" opacity-75">Email:</span> <span className="font-semibold">{email}</span></p>
                <p><span className=" opacity-75">Language:</span> <span className="font-semibold">English, Urdu, Hindi, Bengali</span></p>
            </div>
            <div>
            <div className="gap-5 md:hidden">
                <p><span className=" opacity-75">First Name:</span> <span className="font-semibold">{firstName}</span></p>
                <p><span className=" opacity-75">Last Name: </span><span className="font-semibold">{lastName}</span></p>
                <p><span className=" opacity-75">Age: </span><span className="font-semibold">{age}</span> </p> 
                <p><span className=" opacity-75">Freelance: </span><span className="font-semibold text-green-500">Available</span> </p>
                <p><span className=" opacity-75">Phone:</span> <span className="font-semibold">{phone}</span></p>
            </div>

            {/* right  */}
            <div className="gap-5 md:hidden">
                <p><span className=" opacity-75">WhatsApp:</span> <span className="font-semibold">{phone}</span></p>
                <p><span className=" opacity-75">Email:</span> <span className="font-semibold">{email}</span></p>
                <p><span className=" opacity-75">Nationality:</span> <span className="font-semibold">India</span> </p> 
                <p><span className=" opacity-75">Address:</span> <span className="font-semibold">West Bengal, India</span></p>
                <p><span className=" opacity-75">Language:</span> <span className="font-semibold">English, Urdu, Hindi, Bengali</span></p>
            </div>
            </div>
        </div>
        <Bbtn style={`mt-5`} />
        </>
    )
}
