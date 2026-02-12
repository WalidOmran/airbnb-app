import usePropertyForm from "@/customHooks/usePropertyForm";
import { createContext, useContext } from "react";



const PropertyFormContext = createContext(null);


export const PropertyFormContextProvider = ({children,initialData}) => {

     const propertyForm = usePropertyForm(initialData);
    return (
        <PropertyFormContext.Provider value={propertyForm}>
            {children}
        </PropertyFormContext.Provider>
    )
}

export const usePropertyFormContext = ()=> {
    const context = useContext(PropertyFormContext);
    if (!context) {
        throw new Error("usePropertyFormContext must be used within a PropertyFormContextProvider");
    }
    return context;
}