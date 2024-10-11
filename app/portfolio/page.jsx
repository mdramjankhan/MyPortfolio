"use client";
import { AppContext } from "../components/AppContext";
import { useContext } from "react";
import HiText from "../components/HiTexrt";
import GridLayout from "../components/elements/GridLayout";
import { useEffect } from "react";
import toast from "react-hot-toast";
import MyImg from "../assets/Me.png";
import Image from "next/image";

export default function PortfolioPage() {
    const { theme } = useContext(AppContext);

    useEffect(() => {
        const timeout = setTimeout(() => {
            // toast('Contents will be added soon.. See the Demo', {
            //     duration: 3000, // Toast duration in milliseconds
            // });
            toast.custom((t) => (
                <div
                    className={`${t.visible ? 'animate-enter' : 'animate-leave'
                        } max-w-md w-full ${theme === "light" ? ("nav-Bcolor text-white ") : ("bg-[#ebe8ddf2]")} shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                    <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">
                                <Image
                                    className="h-10 w-10 rounded-full"
                                    src={MyImg}
                                    alt=""
                                />
                            </div>
                            <div className="ml-3 flex-1">
                                <p className="text-sm font-medium ">
                                    M.R.K
                                </p>
                                <p className="mt-1 text-sm opacity-60">
                                    Contents will be added soon.. See the Demo
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex border-l border-gray-200">
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Close
                        </button>
                    </div>
                </div>
            ))
        }, 1000); // Delay before showing the toast in milliseconds

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`pt-5 h-screen  overflow-y-scroll overflow-hidden relative ${theme === "light" ? ("bg-[#121212] text-white ") : ("bg-[#ebe8ddf2]")}`}>
            <div className={`text-center h-32 `}>
                <h1 className={`absolute z-[1] top-[1.68rem] left-1/2 transform -translate-x-1/2 uppercase w-full md:top-12 md:text-7xl font-[900] text-5xl ${theme === "light" ? "text-white" : "text-black"} mt-7`}>my<HiText text={"portfolio"} /> </h1>
                <h1 className={`absolute  z-0  top-[1rem] left-1/2 transform -translate-x-1/2 md:text-[8rem] textSize font-[900] uppercase text-slate-500 text-opacity-40`}>works</h1>
            </div>
            <div>
                <GridLayout />
            </div>
        </div>
    );
}