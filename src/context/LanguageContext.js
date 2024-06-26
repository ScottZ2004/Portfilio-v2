"use client";
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
    return useContext(LanguageContext);
}

export function LanguageProvider({children}){
    const [language, setLanguage] = useState('en');
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}