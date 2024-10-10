import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function Card({ number, text ,text2, theme}) {
    return <div className={` border-2 rounded-md min-w-[150px] max-w-[175px] ${theme === "light" ?("text-yellow-50 border-slate-200"):("border-gray-400")} p-5`}>
        <div >
            <p className={`flex ${theme === "light" ?("text-yellow-400"):("text-yellow-400")}`}>
                <span className={`text-4xl font-bold  `}>
                    {number}
                </span>
                <FaPlus />
            </p>
        </div>
        <div>
            <p className="flex items-center gap-2">
                <IoRemoveOutline />
                <span>
                    {text}
                </span>
            </p>
        </div>
    </div>;
}
