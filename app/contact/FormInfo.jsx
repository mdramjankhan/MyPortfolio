import React from 'react';
import MsgBtn from '../components/buttons/MsgBtn';
import { AppContext } from '../components/AppContext';
import { useContext } from "react";
import { useState } from 'react';

export default function FormInfo() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject:"",
        message:""
    });

    // console.log(formData);

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log("Finally printing the Form Data : - ");
        console.log(formData);
    }

    const {theme} = useContext(AppContext);

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="flex flex-col md:flex-row mt-10 gap-2">
                    <input type="text" name="name" value={formData.name} onChange={changeHandler} required placeholder="your name" id="name"
                        className={`p-2 md:w-1/2 border-[1.5px] placeholder:uppercase rounded-3xl
                        focus:border-yellow-500 outline-none placeholder:pl-1
                            text-indent min-h-[49px] ${theme === "light" ? ("bg-gray-600 border-[#121212]") : ("bg-transparent border-gray-300")}
                        `}
                    />
                    <input type="email" name="email" value={formData.email} onChange={changeHandler} required placeholder="your email" id="email"
                        className={`p-2 md:w-1/2 border-[1.5px]  placeholder:uppercase rounded-3xl
                        focus:border-yellow-500 outline-none placeholder:pl-1
                            text-indent min-h-[49px] ${theme === "light" ? ("bg-gray-600 border-[#121212]") : ("bg-transparent border-gray-300")}
                        `}
                    />
                </div>
                <input type="text" name="subject" value={formData.subject} onChange={changeHandler} required placeholder="your subject" id="subject"
                    className={`p-2 w-full border-[1.5px]  placeholder:uppercase rounded-3xl
                    focus:border-yellow-500 outline-none placeholder:pl-1
                        text-indent-tx min-h-[49px] mt-2 ${theme === "light" ? ("bg-gray-600 border-[#121212]") : ("bg-transparent border-gray-300")}
                    `}
                /> <br />
                <textarea placeholder="Enter your text here" name='message' value={formData.message} required onChange={changeHandler}
                    className={` text-indent w-full rounded-3xl placeholder:uppercase border-[1.5px] min-h-32
                    focus:border-yellow-500 outline-none p-3 placeholder:pl-1 mt-2 mb-2
                        ${theme === "light" ? ("bg-gray-600 border-[#121212]") : ("bg-transparent border-gray-300")}
                        `}
                />
                <MsgBtn />
            </form>
        </div>
    )
}
