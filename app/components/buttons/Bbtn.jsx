import { FaDownload } from "react-icons/fa";


export default function Bbtn({style}) {
    
    const btnText = "DOWNLOAD CV";
    return <div className={`${style}`}>
        <button className="btn flex items-center" >
            <div className='ml-4'>
                {btnText}
            </div>
            <div className="bg-[#dfb705] h-[49px] flex items-center justify-center rounded-full w-[49px] absolute right-0">
                <FaDownload />
            </div>
        </button>
    </div>;
}
