import React from 'react';
import Progressbar from './Progressbar';

const SkillSection = () => {
    return (
        <div className={`w-full`}>
            <h1
                className=" uppercase text-center pb-5 font-bold  text-3xl"
            >My skills</h1>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 flex justify-around pb-10">
                    <Progressbar text={"html"} percentage={80} />
                    <Progressbar text={"CSS"} percentage={70} />
                </div>
                <div className="w-full md:w-1/2 flex justify-around pb-10">
                    <Progressbar text={"tailwind"} percentage={80} />
                    <Progressbar text={"javascript"} percentage={80}/>
                </div>
                <div className="w-full md:w-1/2 flex justify-around pb-10">
                    <Progressbar text={"react"} percentage={75}/>
                    <Progressbar text={"express"} percentage={70}/>
                </div>
                <div className="w-full md:w-1/2 flex justify-around pb-10">
                    <Progressbar text={"mongodb"} percentage={55} />
                    <Progressbar text={"next js"} percentage={65}/>
                </div>
                <div className="w-full md:w-1/2 flex justify-around pb-10">
                    <Progressbar text={"c"} percentage={75} />
                    <Progressbar text={"java"} percentage={65}/>
                </div>
                <div className="w-full md:w-1/2 flex justify-around pb-10">
                    <Progressbar text={"python"} percentage={70} />
                    <Progressbar text={"postgresql"} percentage={65}/>
                </div>
            </div>
        </div>
    )
}

export default SkillSection
