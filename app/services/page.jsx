"use client";
import { AppContext } from "../components/AppContext";
import { useContext } from "react";
// import { useEffect } from "react";
// import axios from "axios";
import HiText from "../components/HiTexrt";
import Scards from "../components/servicesComponents/Scards";


export default function ServicePage() {


    // GET request
    // useEffect(() => {
    //     axios
    //         .get('/api/user') // Automatically hits /api/user
    //         .then((response) => {
    //             console.log(response.data); // { users: ['Ramjan', 'John', 'Doe'] }
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching users:', error);
    //         });
    // }, []);

    // POST request
    // const addUser = async () => {
    //     try {
    //         const response = await axios.post('/api/user', { name: 'Ramjan' });
    //         console.log(response.data); // { message: 'User Ramjan created' }
    //     } catch (error) {
    //         console.error('Error adding user:', error);
    //     }
    // };
    // console.log(addUser());

    const { theme } = useContext(AppContext);
    return (
        <div className={`pt-5 h-screen  overflow-y-scroll overflow-hidden relative ${theme === "light" ? ("bg-[#121212] text-white ") : ("bg-[#ebe8ddf2]")}`}>
            {/* my services text section */}
            <div className={`text-center h-32 `}>
                <h1 className={`absolute z-[1] top-[1.68rem] left-1/2 transform -translate-x-1/2 uppercase w-full md:top-12 md:text-7xl font-[900] text-5xl ${theme === "light" ? "text-white" : "text-black"} mt-7`}>my <HiText text={"services"}/> </h1>
                <h1 className={`absolute  z-0  top-[1rem] left-1/2 transform -translate-x-1/2 md:text-[8rem] textSize font-[900] uppercase text-slate-500 text-opacity-40`}>services</h1>
            </div>
            {/* Cards section */}
            <div className="">
                <Scards/>
            </div>

            
        </div>
    );
}