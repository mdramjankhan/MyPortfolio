"use client";
import Mbtn from "./components/buttons/Mbtn";
import me from './assets/Me.png'
import Image from "next/image";
import blob from "./assets/blob.png";
import { AppContext } from "./components/AppContext";
import { useContext } from "react";
import TypeWriter from "./components/TypeWriter";
import Link from 'next/link';

export default function Home() {


  const { theme } = useContext(AppContext);
  const paraText = `I am an Indian web application developer specializing in both frontend and backend development. With a focus on creating clean, efficient, and user-friendly web applications, I am passionate about building software that enhances user experiences and brings real value to people's lives.`;
  return (
    <div className={`pt-5 h-screen hight overflow-y-scroll overflow--hidden relative ${theme === "light" ? ("bg-[#121212] text-gray-300"):("bg-[#ebe8ddf2] text-slate-900")}`}>
      {/* BLOB IMAGE  */}
      <div className="absolute z-0 invisible md:visible overflow-hidden w-[50rem] left-[-25rem] top-[-12rem]">
        <Image src={blob} className="overflow-hidden" alt="blob"/>
      </div>

      <div className="flex flex-col items-center md:flex-row
        md:p-8 md:gap-10 overflow-hidden
      ">
        {/* image  */}
        <div className="w-[15rem] rounded-full overflow-hidden shadowImg
          md:w-1/2 md:rounded-3xl lg:w-96 z-10 
        ">
          <Image src={me} alt="me"/>
        </div>
        {/* text  */}
        <div className="flex flex-col justify-center items-center mt-10
          md:w-1/2
        ">      
          <h1 className="text-center"><span className="uppercase font-bold text-3xl text-yellow-500 lg:text-4xl">I'm Md Ramjan Khan.</span> <br /><span className={`uppercase font-bold text-3xl  lg:text-4xl ${theme === "light" ?("text-slate-300"):("text-slate-500")} `}>
            <TypeWriter text={"Web developer"}/>
            </span></h1>
          <p className="p-5 lg:p-3 mb-8 text-center  md:text-left mt-5">{paraText}</p>
          <Link href="/about"><Mbtn /></Link>
          
        </div>
      </div>
    </div>
  );
}
