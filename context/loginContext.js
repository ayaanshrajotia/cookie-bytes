"use client";

import { createContext, useState } from "react";

export const LoginContext = createContext(false);

export const LoginContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <LoginContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};
