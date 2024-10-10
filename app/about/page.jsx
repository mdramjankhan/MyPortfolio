"use client";
import HiText from "../components/HiTexrt";
import { AppContext } from "../components/AppContext";
import { useContext } from "react";
import Infos from "../components/Infos";
import ExCards from "../components/ExCards";
import SkillSection from "../components/SkillSection";
import EduSec from "../components/EduSec";

export default function AboutPage() {
    const { theme } = useContext(AppContext);
    // console.log(theme)
    return (
        <div className={`pt-5 h-screen  overflow-y-scroll overflow-hidden relative ${theme === "light" ? ("bg-[#121212] text-white "):("bg-[#ebe8ddf2]")}`}>
            {/* About me text section */}
            <div className={`text-center h-32 `}>
                <h1 className={`absolute z-[1] top-[1.68rem] left-1/2 transform -translate-x-1/2 uppercase w-full md:top-12 md:text-7xl font-[900] text-5xl ${theme === "light" ? "text-white" : "text-black"} mt-7`}>About <HiText text={"me"}/> </h1>
                <h1 className={`absolute  z-0  top-[1rem] left-1/2 transform -translate-x-1/2 md:text-[8rem] textSize font-[900] uppercase text-slate-500 text-opacity-40`}>resume</h1>
            </div>
            {/* personal info and experience */}
            <div className={`w-screen p-3 lg:p-5 lg:pr-12 mt-10 flex`}>
                <div className="flex flex-col md:flex-row">
                    {/* left - personalInfos */}
                    <div className={` lg:w-1/2 p-4`}>
                        <h1 className={`uppercase text-xl font-semibold`}>Personal Infos</h1>
                            <Infos
                                firstName={"Md Ramjan"}
                                lastName={"Khan"}
                                age={22}
                                email={"rk9032929@gmail.com"}
                                phone={"+91 7872857822"}
                                theme={theme}
                            />
                    </div>
                    {/* ${theme === "light" ?("text-white"):("")} */}
                    {/* right  - expriences  */}
                    <div className={`lg:w-1/2 mt-7 md:mt-0  `}>
                        <ExCards theme={theme}/>
                    </div>
                    
                </div>
            </div>

            {/* My skills section */}
            <SkillSection />
            {/* My education section */}
            <EduSec />
        </div>
    );
}