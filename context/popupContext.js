"use client";

import { createContext, useState } from "react";

export const PopupContext = createContext(false);

export const ContextProvider = ({ children }) => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <PopupContext.Provider
            value={{
                isLoginOpen,
                setIsLoginOpen,
                isFilterOpen,
                setIsFilterOpen,
            }}
        >
            {children}
        </PopupContext.Provider>
    );
};
