"use client";

import useManageProperties from "@/customHooks/useManageProperties";
import { createContext, useContext, useMemo } from "react";


const PropertyContext = createContext({});

export const PropertyProvider = ({children})=> {
    const propertyLogic = useManageProperties();
    const value = useMemo(()=> ({...propertyLogic}) ,[propertyLogic]);

    return(
        <PropertyContext.Provider value={value} >
            {children}
        </PropertyContext.Provider>
    )
}

export const useProperties = ()=> useContext(PropertyContext);















