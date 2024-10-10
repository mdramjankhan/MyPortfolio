import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { AppContext } from './AppContext';
import { useContext } from 'react'

export default function Progressbar({text, percentage}) {
    const { theme } = useContext(AppContext);
    return (
        <div className="mb-2 flex flex-col w-40 items-center gap-4 ">
            <div style={{ width: 130}}>
                <CircularProgressbar value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                        textSize: '16px',
                        pathTransitionDuration: 0.5,           
                        pathColor: `rgba(255, 200, 0, ${percentage / 100})`,
                        textColor: `${theme === "light"? ("rgba(255,255,255)"):("rgb(0,0,0)")}`,
                        trailColor: `${theme === "light"? ("rgba(38,38,38)"):("#d6d6d6")}`,
                        fontWeight: "bold",
                    })}
                />
            </div>
            <h1 className="font-semibold uppercase text-xl">{text}</h1>
        </div>
    )
}
