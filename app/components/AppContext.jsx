"use client";
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [theme, setTheme] = useState(true); // Initialize with a default value

    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }


    const value = {
        theme,
        setTheme,
        toggleTheme,
    };

    return <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
}