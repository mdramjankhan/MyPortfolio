import React from 'react';
import { FaBriefcase } from "react-icons/fa";
import { AppContext } from './AppContext';
import { useContext } from "react";


export default function EduCard({time,deg,where,info}) {
    const {theme} = useContext(AppContext);
    return (
        <div className={`flex items-start gap-5 min-w-[50%] `}>
            <div className={`flex flex-col items-center`}>
                <div
                    className={`w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center`}
                ><FaBriefcase className="size-5 text-white"/></div>
                <div className={`h-[8rem] bg-gray-400 w-[0.07rem] `}></div>
            </div>
            <div>
                <span
                    className={`p-1 pl-2 pr-2 ${theme === "light"? ("bg-gray-500"):("bg-slate-300")} rounded-3xl uppercase text-sm `}
                >{time}</span>
                <h1 className="flex mt-8"><span
                    className="font-semibold md:text-2xl uppercase text-nowrap"
                >{`${deg}‎ -`}</span><span className="flex items-center md:text-xl uppercase font-semibold opacity-50">{`‎ ${where}`}</span></h1>
                <p className="opacity-80 mt-5">{info}</p>
            </div>
        </div>
    )
}
