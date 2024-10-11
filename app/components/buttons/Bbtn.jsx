import { FaDownload } from "react-icons/fa";
import React, { useState } from 'react';


export default function Bbtn({ style }) {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = () => {
        setIsDownloading(true);

        const link = document.createElement('a');
        link.href = '/cv.pdf'
        link.download = 'My_CV.pdf';
        link.click();
        link.remove();

        setTimeout(() => {
            setIsDownloading(false);
        }, 2000);

    };

    return <div className={`${style}`}>
        <button className="btn flex items-center" disabled={isDownloading} onClick={handleDownload} >
            <div className='ml-4 uppercase'>
                {isDownloading ? 'Downloading...' : 'Download CV'}
            </div>
            <div className="bg-[#dfb705] h-[49px] flex items-center justify-center rounded-full w-[49px] absolute right-0">
                <FaDownload />
            </div>
        </button>
    </div>;
}