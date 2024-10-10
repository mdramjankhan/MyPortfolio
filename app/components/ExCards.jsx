import React from 'react';
import Card from './Card';


export default function ExCards({theme}) {
    return (
        <div className=" max-w-1/2 flex flex-wrap flex-row justify-center mb-20 gap-10  ">
            <div className="md:w-1/2 flex gap-10 lg:gap-20">
                <Card theme={theme} number={1} text={"Years of Experience"}/>
                <Card theme={theme} number={5} text={"Completed Project"}/>
            </div>
            <div className="md:w-1/2 flex gap-10 lg:gap-20">
                <Card theme={theme} number={5} text={"Happy Customers"}/>
                <Card theme={theme} number={8} text={"Awards Won"}/>
            </div>

        </div>
    )
}
