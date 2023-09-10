"use client";

import { createContext, useState } from "react";

export const LoginContext = createContext(false);

export const ContextProvider = ({ children }) => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <LoginContext.Provider
            value={{
                isLoginOpen,
                setIsLoginOpen,
                isFilterOpen,
                setIsFilterOpen,
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};
