import {createContext, useState} from "react";


export const Context = createContext(null)
export const ContextProvider = ({children}) => {
    const state = useState()
    return (
        <div>
            <Context.Provider value={state}>
                {children}
            </Context.Provider>
        </div>
    );
};

