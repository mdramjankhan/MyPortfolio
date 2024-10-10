import React from 'react';
import EduCard from './EduCard';

export default function EduSec() {
    return (
        <div className="p-3 lg:p-5 pb-[4.3rem]  ">
            <h1
                className=" uppercase text-center pb-5 font-bold  text-3xl"
            >My education</h1>
            <div className="flex flex-col md:flex-row">
                <EduCard
                    time={"2022 - Present"}
                    where={"Swami Vivekanda University"}
                    deg={"B.Tech In CSE"}
                    info={"Board Of Education: AICTE"}
                />
                <EduCard
                    time={"2020 - 2022"}
                    where={"Rajgaon Mahamaya (H.S)"}
                    deg={"Higher Secondary"}
                    info={"Board Of Education: WBCHSE"}
                />
            </div>
            <div className="flex flex-col md:flex-row">
                <EduCard
                    time={"2020"}
                    where={"Rajgaon Mahamaya (H.S)"}
                    deg={"Secondary"}
                    info={"Board Of Education: WBBSE"}
                />
                <EduCard
                    time={"2024"}
                    where={"British Counsil"}
                    deg={"English language"}
                    info={"The United Kingdom's International Organisation"}
                />
            </div>
            <div className="flex flex-col md:flex-row">
                <EduCard
                    time={"2023"}
                    where={`ASD`}
                    deg={"pyhton programming"}
                    info={"Academy of Skill Developtment"}
                />
                <EduCard
                    time={"2024"}
                    where={"swami vivekananda university"}
                    deg={"Java Development"}
                    info={"Windows Programming Using Java"}
                />
            </div>
        </div>
    )
}
