"use client";
import { AppContext } from "../components/AppContext";
import { useContext } from "react";
import HiText from "../components/HiTexrt";
import AddressInfo from "./AddressInfo";
import FormInfo from "./FormInfo";


export default function ContactPage() {
    const { theme } = useContext(AppContext);
    return (
        <div className={`pt-5 h-screen  overflow-y-scroll overflow-hidden relative ${theme === "light" ? ("bg-[#121212] text-white "):("bg-[#ebe8ddf2]")}`}>
            {/* About heading section */}
            <div className={`text-center h-32 `}>
                <h1 className={`absolute z-[1] top-[1.68rem] left-1/2 transform -translate-x-1/2 uppercase w-full md:top-12 md:text-7xl font-[900] text-5xl ${theme === "light" ? "text-white" : "text-black"} mt-7`}>Get in <HiText text={"touch"}/> </h1>
                <h1 className={`absolute  z-0  top-[1rem] left-1/2 transform -translate-x-1/2 md:text-[8rem] textSize font-[900] uppercase text-slate-500 text-opacity-40`}>contact</h1>
            </div>
            <div className=" mt-16 p-5 lg:p-7 flex flex-col md:flex-row">
                <div className="md:w-[40%]">
                    <AddressInfo />
                </div>
                <div className="md:w-[60%]">
                    <FormInfo />
                </div>
            </div>

        </div>
    );
}