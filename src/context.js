"use client"
import { createContext, useContext, useState } from "react";

const TabMenuContext = createContext();

export function TabMenuProvider({ children }) {
    const [currentTabMenu, setCurrentTabMenu] = useState("home");

    return (<TabMenuContext.Provider value={{ currentTabMenu, setCurrentTabMenu }}> {children}</TabMenuContext.Provider>)
}

export const useTabMenu = () => useContext(TabMenuContext);