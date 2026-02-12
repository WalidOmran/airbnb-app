'use client';
import { useReservationLogic } from "@/customHooks/useReservationLogic";
import { createContext , useContext } from "react";


const ReservationContext = createContext(null);


export const ReservationContextProvider = ({children}) => {
    const logic = useReservationLogic();
   


    return (
        <ReservationContext.Provider value={{...logic}} >
            {children}
        </ReservationContext.Provider>
    )
}

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservation must be used within ReservationContextProvider');
  }
  return context;
};
