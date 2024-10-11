"use client";
import { AppContext } from "../components/AppContext";
import { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";


export default function BlogPage() {


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
            <h1> ...WILL BE ADDED SOON</h1>
        </div>
    );
}