"use client";
import { useContext } from "react";
import light from '../assets/light.png';
import dark from '../assets/dark.png';
import Image from 'next/image';
import { AppContext } from "./AppContext";

export default function ToggleButton() {
    const { theme, toggleTheme } = useContext(AppContext);
    return (
        <button  className='absolute z-10 right-7 top-2 w-12'>
            <Image src={
                theme === 'light' ? light : dark
            } onClick={toggleTheme} alt="btn" />
        </button>
    );
}