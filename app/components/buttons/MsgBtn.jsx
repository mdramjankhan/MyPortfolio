// import { GrSend } from "react-icons/gr";


// export default function MsgBtn() {

//     const btnText = "send message";
//     return <div className="mb-24">
//         <button className="btn flex items-center" href={"/about"} >
//             <div className='ml-6 uppercase text-lg font-medium'>
//                 {btnText}
//             </div>
//             <div className="bg-[#dfb705] h-[49px] flex items-center justify-center rounded-full w-[49px] absolute right-0">
//                 <GrSend />
//             </div>
//         </button>
//     </div>;
// }


import { useState, useEffect } from 'react';
import { GrSend } from 'react-icons/gr';

export default function MsgBtn() {
    const [buttonText, setButtonText] = useState('send message');
    const [isSending, setIsSending] = useState(false);

    const handleClick = () => {
        setIsSending(true);
        setButtonText('sending msg..');

        setTimeout(() => {
            setButtonText('message sent');
        }, 2000);

        setTimeout(() => {
            setButtonText('send message');
            setIsSending(false);
        }, 6000);
    };

    return (
        <div className="mb-24">
            <button
                className={`btn flex items-center ${isSending ? 'disabled' : ''}`}
                onClick={handleClick}
                href={"/about"}
            >
                <div className="ml-6 uppercase text-lg font-medium">
                    {buttonText}
                </div>
                <div className="bg-[#dfb705] h-[49px] flex items-center justify-center rounded-full w-[49px] absolute right-0">
                    <GrSend />
                </div>
            </button>
        </div>
    );
}