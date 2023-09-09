"use client";

import { createContext, useState } from "react";

export const LoginContext = createContext(false);

export const ContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <LoginContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </LoginContext.Provider>
    );
};
