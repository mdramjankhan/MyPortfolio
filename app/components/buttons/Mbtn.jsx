import { FaArrowRight } from "react-icons/fa";
export default function Mbtn() {
    
    const btnText = "More About Me";
    return <div className="mb-24">
        <button className="btn flex items-center" href={"/about"} >
            <div className='ml-4'>
                {btnText}
            </div>
            <div className="bg-[#dfb705] h-[49px] flex items-center justify-center rounded-full w-[49px] absolute right-0">
                <FaArrowRight />
            </div>
        </button>
    </div>;
}
