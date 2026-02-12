"use client";
import useManageCities from '@/customHooks/useManageCities';
import {createContext, useContext, useMemo} from 'react';

const CitiesContext = createContext({
    cities: [],
    loadingCities: false
});



export const CitiesContextProvider = ({children})=> {
    const {cities , loadingCities} = useManageCities();
    const value = useMemo(()=> ({
            cities ,
            loadingCities
        }),[cities,loadingCities]);


    return(
        <CitiesContext.Provider value={value}>
            {children}
        </CitiesContext.Provider>
    )
}


export const useCities = () => {

    const context = useContext(CitiesContext);
    if (!context) {
        throw new Error("useCities must be used within a CitiesContextProvider");
    }
    return context;
};