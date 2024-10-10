"use client";
import { AppContext } from "../components/AppContext";
import { useContext } from "react";


export default function ContactPage() {
    const { theme } = useContext(AppContext);
    return (
        <div className={`pt-5 h-screen  overflow-y-scroll overflow-hidden relative ${theme === "light" ? ("bg-[#121212] text-white "):("bg-[#ebe8ddf2]")}`}>
            <h1> ...WILL BE ADDED SOON</h1>
        </div>
    );
}