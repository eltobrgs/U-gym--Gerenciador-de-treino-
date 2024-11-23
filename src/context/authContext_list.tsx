import React, { createContext, useContext } from "react";

export const authContextList = createContext({});

export const AuthProvider_list = (props: any) => {
    const onOpen = () => {
        alert("open. Atenção Modal aberto");
    };

    return (
        <authContextList.Provider value={{onOpen}}>
            {props.children}
        </authContextList.Provider>
    );
};

export const useAuth = () => useContext(authContextList);
